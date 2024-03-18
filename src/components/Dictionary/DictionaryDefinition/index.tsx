import Heading from "../../../typographies/Heading";
import List from "../../../typographies/List";

export interface MeaningItem {
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
    }[];
  }[];
}

const Component = ({ meanings }: MeaningItem) => {
  return (
    <div className="mt-8 lg:mt-6">
      {meanings.map((meaning, index) => (
        <div key={index}>
          <div className=" flex flex-row">
            <Heading
              kind="h2"
              content={meaning.partOfSpeech}
              css="mr-4 text-xl font-bold italic text-Shark"
            />
            <div className="flex h-[1px] w-full self-center rounded-full bg-SilverChalice"></div>
          </div>
          <ul className="my-4">
            <Heading
              kind="h3"
              content="meaning"
              css="text-lg font-bold capitalize text-SilverChalice"
            />
            {meaning.definitions.map((definition, index) => (
              <ul key={index} className="text-Shark marker:text-ElectricViolet">
                <List
                  css="font-base my-2 ml-5 list-disc pl-3 lg:ml-10"
                  content={definition.definition}
                />
                {definition.example ? (
                  <List
                    css="ml-5 text-SilverChalice"
                    content={definition.example}
                  />
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
