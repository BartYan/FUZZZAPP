const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_KEY);

const scalesTable = base('scales');

console.log(scalesTable)

const createScales = async (req, res) => {
        const findScalesRecords = await scalesTable.select({
            // maxRecords: 3,
            // view: "Grid view",
            // filterByFormula: `id=0`
        }).firstPage();  

        // console.log('Check out Scales', findScalesRecords)
        if (findScalesRecords.length !== 0) {
            const records = findScalesRecords.map(record => {
                return {
                    ...record.fields
                }
            })
            res.json(records)
            console.log(records)
        } else {
            res.json({message: 'nothing'});
        }
        
}
export default createScales;