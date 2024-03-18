import Heading from "../../../typographies/Heading";
import Paragraph from "../../../typographies/Paragraph";

interface ItemData {
  word: string;
  phonetic: string;
}

const Component = ({ word, phonetic }: ItemData) => {
  return (
    <>
      <Heading
        kind="h1"
        content={word}
        css="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold"
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
