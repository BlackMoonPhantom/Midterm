import { useState, useEffect } from "react";
import axios from "axios";


const baseURL = 'http://localhost:5173';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(undefined);

  useEffect(() => {
    
    const getData = async () => {
        setError(undefined);
      try{
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }

    
    };
    getData();
    
  }, [url]);

  return { data, loading, error };

};

export default useFetch;
//git test dont mind me 