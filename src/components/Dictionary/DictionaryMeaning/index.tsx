import { useFetch } from "../../../hook/useFetch";

import DictionaryAudio from "../DictionaryAudio";

const Component: React.FC = () => {
  const { data, error } = useFetch("cat");

  return (
    <div className="mx-4 mt-4 flex w-full flex-col self-center lg:mx-0 lg:w-3/6">
      {data && data[0] && (
        <>
          <div className="flex justify-between">
            <div>
              <p className="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold">
                {data[0].word}
              </p>
              <p className="text-xl text-ElectricViolet lg:text-lg">
                {data[0].phonetic}
              </p>
            </div>
            <div>
              <DictionaryAudio />
            </div>
          </div>
          <div className="mt-8 lg:mt-6">
            {data[0].meanings.map((meaning, index) => (
              <div key={index}>
                <div className=" flex flex-row">
                  <p className="mr-4 text-xl font-bold italic text-Shark">
                    {meaning.partOfSpeech}
                  </p>
                  <div className="flex h-[1px] w-full self-center rounded-full bg-SilverChalice"></div>
                </div>
                <ul className="my-4">
                  <p className="text-lg font-bold capitalize text-SilverChalice">
                    meaning
                  </p>
                  {meaning.definitions.map((definition, index) => (
                    <ul
                      key={index}
                      className="text-Shark marker:text-ElectricViolet"
                    >
                      <li className="font-base my-2 ml-5 list-disc pl-3 lg:ml-10">
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
