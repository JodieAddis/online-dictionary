import { useFetch } from "../../hook/useFetch";

const Component = () => {
  const { data, error } = useFetch("cat");
  return (
    <>
      {data && data[0] && (
        <audio
          className="text-black"
          src={data[0].phonetics[0].audio}
          controls
        ></audio>
      )}
    </>
  );
};

export default Component;
