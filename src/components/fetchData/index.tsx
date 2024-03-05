import { useFetch } from "../../hook/useFetch";

const Component: React.FC = () => {
  const { data, error } = useFetch("cat");

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
