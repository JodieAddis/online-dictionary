import IconNewWindow from "../../../icons/IconNewWindow";
import { useFetch } from "../../../hook/useFetch";

const Component = () => {
  const { data, error } = useFetch("cat");
  return (
    <div className="mt-8 lg:w-3/6">
      <p>Source</p>
      {data && data[0] && (
        <div className="flex flex-row">
          <a href={data[0].sourceUrls} className="underline">
            https://en.wiktionary.org/wiki/cat
          </a>
          <a href={data[0].sourceUrls} className="ml-2 self-center">
            <IconNewWindow />
          </a>
        </div>
      )}
    </div>
  );
};

export default Component;
