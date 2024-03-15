import { useFetch } from "../../../hook/useFetch";
import Paragraph from "../../../typographies/Paragraph";

interface WordInputProps {
  wordInput: string;
}

const Component = ({ wordInput }: WordInputProps) => {
  const { data, error } = useFetch(wordInput);
  return (
    <div className="mt-4 flex flex-row lg:w-3/6">
      <Paragraph
        content="synonym"
        css="mr-3 font-bold text-SilverChalice capitalize"
      />
      {data &&
        data[0].meanings.map((meaning, index) => (
          <ul className="flex flex-row flex-wrap" key={index}>
            {meaning.synonyms.length > 0
              ? meaning.synonyms.map((synonym, indexItem) => (
                  <li
                    key={indexItem}
                    className="mr-4 font-bold text-ElectricViolet underline"
                  >
                    {synonym}
                  </li>
                ))
              : null}
          </ul>
        ))}
    </div>
  );
};

export default Component;
