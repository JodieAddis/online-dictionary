import useTheme from "../../../hook/useTheme";
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
  const { theme } = useTheme();
  return (
    <div className="mt-8 lg:mt-6">
      {meanings.map((meaning, index) => (
        <div key={index}>
          <div className=" flex flex-row">
            <Heading
              kind="h2"
              content={meaning.partOfSpeech}
              css={`
                ${theme == false
                  ? "text-Shark"
                  : "text-white"} mr-4 text-xl font-bold italic
              `}
            />
            <div
              className={`${theme == false ? "bg-SilverChalice" : "bg-white"} flex h-[1px] w-full self-center rounded-full `}
            ></div>
          </div>
          <ul className="my-4">
            <Heading
              kind="h3"
              content="meaning"
              css="text-lg font-bold capitalize text-SilverChalice"
            />
            {meaning.definitions.map((definition, index) => (
              <ul
                key={index}
                className={`${theme == false ? " text-Shark" : "text-white"} marker:text-ElectricViolet`}
              >
                <List
                  css="font-base mt-4 ml-5 list-disc pl-3 lg:ml-10"
                  content={definition.definition}
                />
                {definition.example ? (
                  <List
                    css="ml-6 text-SilverChalice"
                    content={`" ${definition.example} "`}
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
