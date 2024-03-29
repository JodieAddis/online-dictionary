import useTheme from "../../../hook/useTheme";
import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface ItemData {
  word: string;
  phonetic: string;
}

const Component = ({ word, phonetic }: ItemData) => {
  const { theme } = useTheme();
  return (
    <>
      <Heading
        kind="h1"
        content={word}
        css={`
          ${theme == false
            ? "text-Shark"
            : "text-white"} text-3xl font-medium  lg:text-6xl lg:font-bold
        `}
      />
      {phonetic ? (
        <Paragraph
          content={phonetic}
          css="text-xl text-ElectricViolet lg:text-lg"
        />
      ) : null}
    </>
  );
};

export default Component;
