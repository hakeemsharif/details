import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [datatwo, setDatatwo] = useState([])
    const [datathree, setDatathree] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                
                setData(json.data)
                setDatatwo(json.data)
                setDatathree(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])
    
    return { loading, error, data , datatwo, datathree}
}

export default useFetch