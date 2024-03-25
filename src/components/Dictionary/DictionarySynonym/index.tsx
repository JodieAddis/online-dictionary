import useTheme from "../../../hook/useTheme";
import List from "../../../typographies/List";
import Paragraph from "../../../typographies/Paragraph";

interface SynonymItem {
  meanings: {
    synonyms: string[];
  }[];
}

const Component = ({ meanings }: SynonymItem) => {
  const { theme } = useTheme();
  return (
    <div className="mt-4 flex flex-row">
      <Paragraph
        content="synonym"
        css={`
          ${theme == false
            ? "text-SilverChalice"
            : "text-white"} mr-3 font-bold capitalize
        `}
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
