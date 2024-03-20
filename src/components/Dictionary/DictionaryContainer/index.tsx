import { useFetch } from "../../../hook/useFetch";
import ErrorMessage from "../../ErrorMessage";
import Loading from "../../Loading";
import DictionaryAudio from "../DictionaryAudio";
import DictionaryDefinition from "../DictionaryDefinition";
import DictionaryPhonetic from "../DictionaryPhonetic";
import DictionarySource from "../DictionarySource";
import DictionarySynonym from "../DictionarySynonym";

interface CurrentWordProps {
  currentWord: string;
}

const Component = ({ currentWord }: CurrentWordProps) => {
  const { data, isLoading, error } = useFetch(currentWord);
  return (
    <>
      {error && <ErrorMessage />}
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

export default Component;
