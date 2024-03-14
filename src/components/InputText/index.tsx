import { useState } from "react";
import IconSearch from "../../icons/IconSearch";

const Component = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const input = document.querySelector("#input-text") as HTMLInputElement;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const input = document.querySelector("#input-text") as HTMLInputElement;
    setCurrentWord(input.value);
  };

  return (
    <form action="" className="my-10 flex w-full self-center lg:w-3/6">
      <input
        type="text"
        placeholder="Search a word..."
        id="input-text"
        className="w-full rounded-l-lg bg-Gallery py-4 font-bold placeholder-SilverChalice placeholder:pl-5"
      />
      <button
        className="rounded-r-lg bg-Gallery pr-5"
        type="submit"
        onClick={handleClick}
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default Component;
