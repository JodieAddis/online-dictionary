import { useState, useEffect } from "react";
import { DataItem } from "../types";

export const useFetch = (inputText: string) => {
  const [data, setData] = useState<DataItem[]>();
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`,
        );
        if (!response.ok) {
          throw new Error(`Fail to get data: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();

    // fonction de nettoyage : reprise des states initiaux
    return (): void => {
      // setData([]);
      setError(false);
      setIsLoading(false);
    };
  }, [inputText]);

  return { data, isLoading, error };
};
