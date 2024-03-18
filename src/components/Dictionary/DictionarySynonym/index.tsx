import List from "../../../typographies/List";
import Paragraph from "../../../typographies/Paragraph";

interface SynonymItem {
  meanings: {
    synonyms: string[];
  }[];
}

const Component = ({ meanings }: SynonymItem) => {
  return (
    <div className="mt-4 flex flex-row lg:w-3/6">
      <Paragraph
        content="synonym"
        css="mr-3 font-bold text-SilverChalice capitalize"
      />
      {meanings.map((meaning, index) => (
        <ul className="flex flex-row flex-wrap" key={index}>
          {meaning.synonyms.length > 0
            ? meaning.synonyms.map((synonym, indexItem) => (
                <List
                  key={indexItem}
                  css="mr-4 font-bold text-ElectricViolet underline"
                  content={synonym}
                />
              ))
            : null}
        </ul>
      ))}
    </div>
  );
};

export default Component;
