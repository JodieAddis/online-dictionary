import { useFetch } from "../../../hook/useFetch";

const Component = () => {
  const { data, error } = useFetch("cat");
  return (
    <div className="flex flex-row">
      {data &&
        data[0].meanings.map((meaning, index) => (
          <div className="mx-10" key={index}>
            <ul>
              {meaning.synonyms.map((synonym, indexItem) => (
                <li key={indexItem}>{synonym}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Component;
