import DictionaryAudio from "../../components/Dictionary/DictionaryAudio";
import DictionaryDefinition from "../../components/Dictionary/DictionaryDefinition";
import DictionaryPhonetic from "../../components/Dictionary/DictionaryPhonetic";
import DictionarySource from "../../components/Dictionary/DictionarySource";
import DictionarySynonym from "../../components/Dictionary/DictionarySynonym";
import InputText from "../../components/InputText";

import { useFetch } from "../../hook/useFetch";

const Container = () => {
  const { data, error } = useFetch("cat");
  return (
    <>
      <InputText />
      <div className="mx-4 mt-4 flex w-full flex-col self-center lg:mx-0 lg:w-3/6">
        {data && data[0] && (
          <>
            <div className="flex justify-between">
              <div>
                <DictionaryPhonetic
                  word={data[0].word}
                  phonetic={data[0].phonetic}
                />
              </div>
              <div>
                <DictionaryAudio srcUrl={data[0].phonetics[0].audio} />
              </div>
            </div>
            <DictionaryDefinition />
          </>
        )}
      </div>
      <div>
        <DictionarySynonym />
      </div>
      <DictionarySource />
    </>
  );
};

export default Container;
