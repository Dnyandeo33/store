import { useEffect, useState } from 'react';

const useFetch = (url, endpoint) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const response = await fetch(`${url}${endpoint}`);
                const result = await response.json();
                setData(result.products || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [url, endpoint]);

    return { data, loading, error };
};

export default useFetch;