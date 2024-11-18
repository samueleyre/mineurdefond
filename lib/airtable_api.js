const baseId = process.env.AIRTABLE_BASE_ID
const airtableKeyAccess = process.env.AIRTABLE_API

const Airtable = require('airtable');
import axios from 'axios';
import fs from 'fs';
import path from 'path';

const checkFileExists = (filePath) => {
    return fs.existsSync(filePath);
}

export default async function getEvents() {

    if (airtableKeyAccess) { // required because of error message at this point on dev
        const base = new Airtable({apiKey: airtableKeyAccess}).base(baseId);

        const events = (await base('Event').select({
            maxRecords: 500,
            view: 'Grid view'
        }).firstPage()).map((record) => {
            return {
                name: record.get("Name") ? record.get("Name") : null,
                link: record.get("Link") ? record.get("Link") : null,
                date: record.get("Date") ? record.get("Date") : null,
                place: record.get("Place") ? record.get("Place") : null,
                hour: record.get("Hour") ? record.get("Hour") : null,
                description: record.get("Description") ? record.get("Description") : null,
                image: record.get("Attachments") ? record.get("Attachments") : null,
                confirmed: record.get("Confirmed") ? record.get("Confirmed") : false,
                projectName: record.get("ProjectName") ? record.get("ProjectName")[0] : null,
            }
        }).filter(event => event.projectName && event.confirmed)

        // order by date desc
        events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        // Download each image and replace the URL with a local path
        await Promise.all(events.map(async (event, index) => {
            if (event.image && event.image[0] && event.image[0].url) {
                const publicImagePath = `/downloaded_images/${event.image[0].filename}`;
                const dllImagePath = path.join(process.cwd(), `/public/${publicImagePath}`);
                if (!checkFileExists(dllImagePath)) {
                    const response = await axios({
                        url: event.image[0].url,
                        responseType: 'arraybuffer'
                    });
                    const buffer = Buffer.from(response.data, 'binary');
                    await fs.promises.writeFile(dllImagePath, buffer);
                    event.image[0].url = publicImagePath; // Update URL to local path
                }
            }
        }));

        // if not image set default image
        events.forEach((event) => {
            if (!event.image) {
                const projectNameLowerCase = event.projectName.toLowerCase();
                event.image = [
                    {
                        url: `/images/${projectNameLowerCase}.webp`
                    }
                ]
            }
        });

        return events;

    }


}






