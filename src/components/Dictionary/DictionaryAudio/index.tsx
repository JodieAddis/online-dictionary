import { useFetch } from "../../../hook/useFetch";

interface AudioUrl {
  srcUrl: string;
}

const Component = ({ srcUrl }: AudioUrl) => {
  const { data, error } = useFetch("cat");
  return (
    <>
      {data && data[0] && (
        <audio
          className="text-black"
          // src={data[0].phonetics[0].audio}
          src={srcUrl}
          controls
        ></audio>
      )}
    </>
  );
};

export default Component;
