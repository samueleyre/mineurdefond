const baseId = process.env.AIRTABLE_BASE_ID
const airtableKeyAccess = process.env.AIRTABLE_API

const Airtable = require('airtable');

export default async function getEvents() {

    if (airtableKeyAccess) { // required because of error message at this point on dev
        const base = new Airtable({apiKey: airtableKeyAccess}).base(baseId);

        // test connexion to airtable


        return (await base('Event').select({
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
                confirmed: record.get("Confirmed") ? record.get("Confirmed") : false
            }
        });
    }


}




