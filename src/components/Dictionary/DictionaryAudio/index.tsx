import { useFetch } from "../../../hook/useFetch";

interface WordInputProps {
  wordInput: string;
}

const Component = ({ wordInput }: WordInputProps) => {
  const { data } = useFetch(wordInput);
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
