import { useEffect, useState } from "react";

const Component: React.FC = (): any => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/cat", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.log("No data fetch"));
  }, []);
  return { data, error };
};

export default Component;

/*
import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};
*/
