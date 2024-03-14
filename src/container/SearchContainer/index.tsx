import DictionaryAudio from "../../components/Dictionary/DictionaryAudio";
import DictionaryDefinition from "../../components/Dictionary/DictionaryDefinition";
import DictionaryPhonetic from "../../components/Dictionary/DictionaryPhonetic";
import DictionarySource from "../../components/Dictionary/DictionarySource";
import DictionarySynonym from "../../components/Dictionary/DictionarySynonym";

import { FormEvent, useRef, useState } from "react";
import IconSearch from "../../icons/IconSearch";

const Container = () => {
  const [currentWord, setCurrentWord] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputRef.current !== null) {
      console.log(inputRef.current.value);
      setCurrentWord(inputRef.current.value);
    }
  };

  return (
    <>
      <form
        action=""
        className="my-10 flex w-full self-center lg:w-3/6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search a word..."
          id="input-text"
          className="w-full rounded-l-lg bg-Gallery py-4 font-bold placeholder-SilverChalice placeholder:pl-5"
          defaultValue={currentWord}
          ref={inputRef}
        />
        <button className="rounded-r-lg bg-Gallery pr-5" type="submit">
          <IconSearch />
        </button>
      </form>
      <div className="mx-4 mt-4 flex w-full flex-col self-center lg:mx-0 lg:w-3/6">
        <>
          <div className="flex justify-between">
            <div>
              <DictionaryPhonetic wordInput={currentWord} />
            </div>
            <div>
              <DictionaryAudio wordInput={currentWord} />
            </div>
          </div>
          <DictionaryDefinition wordInput={currentWord} />
        </>
      </div>
      <div className="flex justify-center">
        <DictionarySynonym wordInput={"test"} />
      </div>
      <div className="my-8 flex h-[1px] self-center rounded-full bg-SilverChalice lg:w-3/6"></div>
      <DictionarySource />
    </>
  );
};

export default Container;
