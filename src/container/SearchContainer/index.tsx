import DictionaryAudio from "../../components/Dictionary/DictionaryAudio";
import DictionaryDefinition from "../../components/Dictionary/DictionaryDefinition";
import DictionaryPhonetic from "../../components/Dictionary/DictionaryPhonetic";
import DictionarySource from "../../components/Dictionary/DictionarySource";
import DictionarySynonym from "../../components/Dictionary/DictionarySynonym";

// import { useFetch } from "../../hook/useFetch";
import { useState } from "react";
import IconSearch from "../../icons/IconSearch";

const Container = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  // const { data } = useFetch(currentWord);

  const input = document.querySelector("#input-text") as HTMLInputElement;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const input = document.querySelector("#input-text") as HTMLInputElement;
    setCurrentWord(input.value);
  };
  return (
    <>
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
      <div className="mx-4 mt-4 flex w-full flex-col self-center lg:mx-0 lg:w-3/6">
        {/* {data && data[0] && ( */}
        <>
          <div className="flex justify-between">
            <div>
              {/* <DictionaryPhonetic
                  word={data[0].word}
                  phonetic={data[0].phonetic}
                /> */}
              <DictionaryPhonetic wordInput={currentWord} />
            </div>
            <div>
              {/* <DictionaryAudio srcUrl={data[0].phonetics[0].audio} /> */}
              <DictionaryAudio wordInput={currentWord} />
            </div>
          </div>
          <DictionaryDefinition wordInput={currentWord} />
        </>
        {/* )} */}
      </div>
      <div className="flex justify-center">
        <DictionarySynonym wordInput={currentWord} />
      </div>
      <div className="my-8 flex h-[1px] self-center rounded-full bg-SilverChalice lg:w-3/6"></div>
      <DictionarySource />
    </>
  );
};

export default Container;
