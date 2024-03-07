import { useFetch } from "../../hook/useFetch";

import DictionaryAudio from "../DictionaryAudio";

const Component: React.FC = () => {
  const { data, error } = useFetch("cat");

  return (
    <div className="mt-4 flex w-3/6 flex-col self-center">
      {data && data[0] && (
        <>
          <div className="flex justify-between">
            <div>
              <p className="text-4xl font-bold">{data[0].word}</p>
              <p className="text-lg">{data[0].phonetic}</p>
            </div>
            <div>
              <DictionaryAudio />
            </div>
          </div>
          <div className="mt-6">
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <div className=" flex flex-row">
                  <p className="mr-4 text-lg font-bold italic">
                    {meaning.partOfSpeech}
                  </p>
                  <div className="flex h-[2px] w-full self-center bg-black"></div>
                </div>
                <ul className="my-4">
                  <p className="text-lg font-bold capitalize">meaning</p>
                  {meaning.definitions.map((definition, index) => (
                    <ul key={index}>
                      <li className="my-2 ml-10 list-disc pl-3">
                        {definition.definition}
                      </li>
                    </ul>
                  ))}
                </ul>
                {/* {meaning.synonyms && (
                  <p className="text-lg font-bold capitalize">
                    synonyms: {meaning.synonyms.join(", ")}
                  </p>
                )} */}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Component;

/*
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
                  <p>Meanings: </p>
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
    */
