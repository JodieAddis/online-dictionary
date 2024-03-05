import { useState, useEffect } from "react";

//l'url API a passé en props pour fetch les données
interface useFetchProps {
  url: string;
}

interface ApiResponce<T> {
  data: T;
}

export const useFetch = ({ url }: useFetchProps) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log("Error");
      }
    }
    getData();
  }, []);

  return { data, error };
};
