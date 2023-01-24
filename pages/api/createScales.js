import { scalesTable, getMinifiedRecords } from '../../lib/airtable';

const createScales = async (req, res) => {
    // find records 
    try {
        const findScalesRecords = await scalesTable.select({
            // maxRecords: 3,
            // view: "Grid view",
            // filterByFormula: `id=0`
        }).firstPage();  
        if (findScalesRecords.length !== 0) {
            const records = getMinifiedRecords(findScalesRecords)
            res.json(records)
            console.log('records', records)
        } else {
            res.json({message: 'nothing'});
        }
    } catch(err){
        console.error('Error scales', err);
        res.status(500);
        res.json({message: 'Something went wrong with scales', err});
    }
        
}
export default createScales;