import DictionaryAudio from "../../components/Dictionary/DictionaryAudio";
import DictionaryDefinition from "../../components/Dictionary/DictionaryDefinition";
import DictionaryPhonetic from "../../components/Dictionary/DictionaryPhonetic";
import DictionarySource from "../../components/Dictionary/DictionarySource";
import DictionarySynonym from "../../components/Dictionary/DictionarySynonym";

import { FormEvent, useRef, useState } from "react";
import IconSearch from "../../icons/IconSearch";
import Loading from "../../components/Loading";
import { useFetch } from "../../hook/useFetch";

const Container = () => {
  const [currentWord, setCurrentWord] = useState<string>("");
  const { data, isLoading, error } = useFetch(currentWord);
  const inputRef = useRef<HTMLInputElement>(null);

  const [errorAlert, setErrorAlert] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputRef.current !== null && inputRef.current.value.trim() !== "") {
      console.log(inputRef.current.value);
      setCurrentWord(inputRef.current.value);
      setErrorAlert(false);
    } else {
      setErrorAlert(true);
      console.log("error message");
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
          className="w-full rounded-l-lg bg-Gallery py-4 font-bold placeholder-SilverChalice outline-none placeholder:pl-5"
          defaultValue={currentWord}
          ref={inputRef}
        />
        <button className="rounded-r-lg bg-Gallery pr-5" type="submit">
          <IconSearch />
        </button>
      </form>

      {errorAlert && (
        <p className="text-Crimson">Empty field, please write something</p>
      )}

      {isLoading && (
        <div className="flex justify-center">
          <Loading />
        </div>
      )}

      {data && data[0] && (
        <>
          <div className="mx-4 mt-4 flex w-full flex-col self-center lg:mx-0 lg:w-3/6">
            <>
              <div className="flex justify-between">
                <div>
                  <DictionaryPhonetic
                    word={data[0].word}
                    phonetic={data[0].phonetic}
                  />
                </div>
                <div>
                  <DictionaryAudio audio={data[0].phonetics[0].audio} />
                </div>
              </div>
              <DictionaryDefinition meanings={data[0].meanings} />
            </>
          </div>
          <div>
            <DictionarySynonym meanings={data[0].meanings} />
          </div>
          <div className="my-8 flex h-[1px] self-center rounded-full bg-SilverChalice lg:w-3/6"></div>
          <DictionarySource sourceUrls={data[0].sourceUrls} />
        </>
      )}
    </>
  );
};

export default Container;
