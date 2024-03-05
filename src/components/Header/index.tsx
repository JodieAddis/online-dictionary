import SerifOptions from "../SerifOptions";

const Component = () => {
  return (
    <div className="border-Scorpion text-Black flex w-3/6 justify-between border-2 border-solid p-4">
      <div>
        <p>Dictonary Logo</p>
      </div>
      <div className="flex flex-row">
        <SerifOptions />
        <div className="bg-CodGray mx-4 h-6 w-[2px]"></div>
        <p>Darkmode</p>
      </div>
    </div>
  );
};

export default Component;
