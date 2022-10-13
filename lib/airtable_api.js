const baseId = process.env.AIRTABLE_BASE_ID
const airtableApi = process.env.AIRTABLE_API

const Airtable = require('airtable');

export default async function getEvents() {

    if (airtableApi) { // required because of error message at this point on dev
        const base = new Airtable({apiKey: airtableApi}).base(baseId);

        return (await base('Event').select({
            maxRecords: 500,
            view: 'Grid view'
        }).firstPage()).map((record) => {
            return {
                name: record.get("Name"),
                link: record.get("Link"),
                date: record.get("Date"),
                place: record.get("Place"),
                hour: record.get("Hour"),
                description: record.get("Description"),
                image: record.get("Attachments")
            }
        });
    }


}




