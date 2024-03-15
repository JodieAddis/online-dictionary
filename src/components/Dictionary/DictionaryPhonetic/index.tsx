import { useFetch } from "../../../hook/useFetch";
import Paragraph from "../../../typographies/Paragraph";

interface WordInputProps {
  wordInput: string;
}

const Component = ({ wordInput }: WordInputProps) => {
  const { data } = useFetch(wordInput);
  return (
    <>
      {data && data[0] && (
        <>
          <Paragraph
            content={data[0].word}
            css="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold"
          />
          {data[0].phonetic ? (
            <Paragraph
              content={data[0].phonetic}
              css="text-xl text-ElectricViolet lg:text-lg"
            />
          ) : null}
        </>
      )}
    </>
  );
};

export default Component;
