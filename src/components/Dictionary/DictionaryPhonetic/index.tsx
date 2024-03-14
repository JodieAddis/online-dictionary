import { useFetch } from "../../../hook/useFetch";

// interface WordPhoneticProps {
//   word: string;
//   phonetic: string;
// }

interface WordInputProps {
  wordInput: string;
}

const Component = ({ wordInput }: WordInputProps) => {
  const { data } = useFetch(wordInput);
  return (
    <>
      {data && data[0] && (
        <>
          <p className="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold">
            {data[0].word}
          </p>
          <p className="text-xl text-ElectricViolet lg:text-lg">
            {data[0].phonetic}
          </p>
        </>
      )}
      {/* <p className="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold">
        {word}
      </p>
      <p className="text-xl text-ElectricViolet lg:text-lg">{phonetic}</p> */}
    </>
  );
};

export default Component;
