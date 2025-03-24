import { useEffect, useState } from "react";

function useFetchCharacters ({endpoint}){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
        try {
            setLoading(true);
            setError(null);

            let allResults = [];
            let url = `https://rickandmortyapi.com/api/${endpoint}`

            while(url){ //Mientras existan más URL para siguientes páginas
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error("Error getting data")
                }
                const result = await response.json();
                allResults = [...allResults, ...result.results];
                url = result.info.next; //Actualiza URL para la siguiente página o null en caso que no haya más
            }
            setData(result.results);
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
        };

        fetchCharacters();
    }, [endpoint])

    return { data, loading, error };
}

export default useFetchCharacters;