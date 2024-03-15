import { useFetch } from "../../../hook/useFetch";
import Paragraph from "../../../typographies/Paragraph";

interface WordInputProps {
  wordInput: string;
}

const Component = ({ wordInput }: WordInputProps) => {
  const { data, error } = useFetch(wordInput);
  return (
    <div className="mt-8 lg:mt-6">
      {data &&
        data[0].meanings.map((meaning, index) => (
          <div key={index}>
            <div className=" flex flex-row">
              <Paragraph
                content={meaning.partOfSpeech}
                css="mr-4 text-xl font-bold italic text-Shark"
              />
              <div className="flex h-[1px] w-full self-center rounded-full bg-SilverChalice"></div>
            </div>
            <ul className="my-4">
              <Paragraph
                content="meaning"
                css="text-lg font-bold capitalize text-SilverChalice"
              />
              {meaning.definitions.map((definition, index) => (
                <ul
                  key={index}
                  className="text-Shark marker:text-ElectricViolet"
                >
                  <li className="font-base my-2 ml-5 list-disc pl-3 lg:ml-10">
                    {definition.definition}
                  </li>
                  {definition.example ? (
                    <li className=" ml-5 text-SilverChalice">
                      " {definition.example} "
                    </li>
                  ) : null}
                </ul>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Component;
