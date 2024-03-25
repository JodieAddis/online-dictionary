import useTheme from "../../hook/useTheme";
import IconError404 from "../../icons/IconError404";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div className="w-96">
        <IconError404 />
      </div>
      <Heading
        kind="h2"
        content="no definitions found"
        css={`
          ${theme == false
            ? "text-mineShaft"
            : "text-white"} capitalize text-3xl font-bold mb-4
        `}
      />
      <Paragraph
        content="Sorry, we couldn't found definitions for the word you are looking for."
        css={`
          ${theme == false
            ? "text-mineShaft"
            : "text-white"} text-xl text-center
        `}
      />
    </div>
  );
};

export default Component;
