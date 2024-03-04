import { useEffect, useState } from "react";

interface DataItem {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
    }[];
  }[];
}

const Component: React.FC = (): any => {
  const [data, setData] = useState<DataItem[]>();
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
  return (
    <>
      {data && data[0] && (
        <>
          <p>{data[0].word}</p>
          <p>{data[0].phonetic}</p>
          <ul>
            {data[0].meanings.map((meaning, index) => (
              <li key={index}>
                <p>Part of Speech: {meaning.partOfSpeech}</p>
                <ul>
                  <p>Definitions: </p>
                  {meaning.definitions.map((definition, index) => (
                    <ul key={index}>
                      <li>{definition.definition}</li>
                    </ul>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
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
