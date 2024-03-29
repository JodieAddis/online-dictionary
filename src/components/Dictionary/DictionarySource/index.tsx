import useTheme from "../../../hook/useTheme";
import IconNewWindow from "../../../icons/IconNewWindow";
import Paragraph from "../../../typographies/Paragraph";

interface SourceItem {
  sourceUrls: string;
}

const Component = ({ sourceUrls }: SourceItem) => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme == false ? "text-Shark" : "text-white"} flex flex-row self-center text-sm lg:w-3/6 `}
    >
      <Paragraph content="source" css="mr-4 capitalize" />
      <div className="flex flex-row">
        <a href={sourceUrls} className="underline">
          {sourceUrls}
        </a>
        <a href={sourceUrls} className="ml-2 self-center">
          <IconNewWindow />
        </a>
      </div>
    </div>
  );
};

export default Component;
