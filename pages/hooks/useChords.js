import { useState, useEffect } from 'react'

const useChords = (callback) => {
    const [chords, setChords] = useState()
    const [scales, setScales] = useState()
    //Get chords from API

    useEffect(() => {
        fetch('/api/createChords')
            .then((response) => response.json())
            .then((data) => setChords(data))
        ;(error) => {
            setChords(error)
        }
    }, [])
    //Get scales from API
    useEffect(() => {
        fetch('/api/createScales')
            .then((response) => response.json())
            .then((data) => setScales(data))
        ;(error) => {
            setScales(error)
        }
    }, [])

    useEffect(() => {
        console.log('chords', chords)
        console.log('scales', scales)
    }, [chords, scales])

    // FEATURES:
    // tune standard, D itd,
    // right hand ?
    // position?

    // chord choice
    // tonacja key
    // notes, intervals

    //CHOOSE KEY
    const handleKey = (e) => {
        selectFile(e)
    }

    return { chords, scales }
}

export default useChords
