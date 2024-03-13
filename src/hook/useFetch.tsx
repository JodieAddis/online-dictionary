import { useState, useEffect } from "react";

interface DataItem {
  word: string;
  phonetic: string;
  phonetics: {
    audio: string;
    sourceUrl: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
    }[];
    synonyms: string[];
  }[];
  sourceUrls: string;
}

export const useFetch = (inputText: string) => {
  const [data, setData] = useState<DataItem[]>();
  const [error, setError] = useState();
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`,
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        // console.log("Error");
      }
    }
    getData();
  }, [inputText]);

  return { data, error };
};
