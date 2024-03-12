interface WordPhoneticProps {
  word: string;
  phonetic: string;
}

const Component = ({ word, phonetic }: WordPhoneticProps) => {
  return (
    <>
      <p className="text-3xl font-medium text-Shark lg:text-6xl lg:font-bold">
        {word}
      </p>
      <p className="text-xl text-ElectricViolet lg:text-lg">{phonetic}</p>
    </>
  );
};

export default Component;
