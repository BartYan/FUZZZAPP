const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_KEY);

const chordsTable = base('chords');

const createChords = async (req, res) => {
        const findChordsRecords = await chordsTable.select({
            // maxRecords: 3,
            // view: "Grid view",
            // filterByFormula: `id=0`
        }).firstPage();  
        if (findChordsRecords.length !== 0) {
            const records = findChordsRecords.map(record => {
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
export default createChords;