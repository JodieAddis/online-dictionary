import { FormEvent, useRef, useState } from "react";
import IconSearch from "../../icons/IconSearch";
import useTheme from "../../hook/useTheme";
import DictionaryContainer from "../../components/Dictionary/DictionaryContainer";

const Container = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const [errorAlert, setErrorAlert] = useState(false);

  const { theme } = useTheme();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      inputRef.current &&
      inputRef.current !== null &&
      inputRef.current.value.trim() !== ""
    ) {
      console.log(inputRef.current.value);
      setCurrentWord(inputRef.current.value);
      setErrorAlert(false);
    } else {
      setErrorAlert(true);
      console.log("error message");
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <form
        className="my-10 flex w-full self-center lg:w-3/6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search a word..."
          id="input-text"
          className={`${theme == false ? "bg-Gallery text-Shark" : "bg-Shark text-white"} w-full rounded-l-lg py-4  pl-5 font-bold placeholder-SilverChalice outline-none`}
          defaultValue={currentWord}
          ref={inputRef}
        />
        <button
          className={`${theme == false ? "bg-Gallery" : "bg-Shark"} rounded-r-lg  pr-5`}
          type="submit"
        >
          <IconSearch />
        </button>
      </form>

      <div className="flex w-full self-center lg:w-3/6">
        {errorAlert && (
          <p className="text-Crimson">Empty field, please write something</p>
        )}
      </div>

      {currentWord && <DictionaryContainer currentWord={currentWord} />}
    </div>
  );
};

export default Container;
