import useTheme from "../../hook/useTheme";
import Paragraph from "../../typographies/Paragraph";
import IconNetwork from "../../icons/IconNetwork";

const Component = () => {
  const { theme } = useTheme();
  return (
    <>
      <Paragraph
        content={
          <>
            Application coded by Jodie{" "}
            <a
              href="https://github.com/JodieAddis"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3"
            >
              <IconNetwork
                name="github"
                color={`${theme == false ? "#2E3238" : "#fff"}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jodieaddis/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 "
            >
              <IconNetwork
                name="linkedin"
                color={`${theme == false ? "#2E3238" : "#fff"}`}
              />
            </a>
          </>
        }
        css={`
          ${theme == false
            ? "text-Shark"
            : "text-white"} mb-4 text-sm flex flex-row
        `}
      />
    </>
  );
};

export default Component;
