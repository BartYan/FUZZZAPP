import { chordsTable, getMinifiedRecords } from '../../lib/airtable'

const createChords = async (req, res) => {
    // find records
    try {
        const findChordsRecords = await chordsTable
            .select({
                // maxRecords: 3,
                // view: "Grid view",
                // filterByFormula: `id=0`
            })
            .firstPage()
        if (findChordsRecords.length !== 0) {
            const records = getMinifiedRecords(findChordsRecords)
            res.json(records)
            // console.log('records', records)
        } else {
            res.json({ message: 'nothing' })
        }
    } catch (err) {
        console.error('Error finding Chords', err)
        res.status(500)
        res.json({ message: 'Error finding Chords' })
    }
}
export default createChords
