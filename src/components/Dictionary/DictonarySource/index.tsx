import IconNewWindow from "../../../icons/IconNewWindow";

const Component = () => (
  <div className="mt-8">
    <p>Source</p>
    <div className="flex flex-row">
      <a href="https://en.wiktionary.org/wiki/cat" className="underline">
        https://en.wiktionary.org/wiki/cat
      </a>
      <a href="https://en.wiktionary.org/wiki/cat" className="ml-2 self-center">
        <IconNewWindow />
      </a>
    </div>
  </div>
);

export default Component;
