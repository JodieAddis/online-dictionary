import { useContext, useState } from "react";
import useTheme from "../../hook/useTheme";
import IconDownArrow from "../../icons/IconDownArrow";
import List from "../../typographies/List";
import { FontContext, FontType } from "../../context/FontContext";

const Component = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("serif");
  const { setFont } = useContext(FontContext);

  const handleOptionClick = (font: FontType) => {
    setSelectedFont(font);
    setIsOpen(false);
    setFont(font);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`${theme == false ? "text-Shark" : "text-white"} flex cursor-pointer flex-row self-center capitalize`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedFont} <IconDownArrow />
        </div>
        {isOpen && (
          <ul
            className={`${theme == false ? "border-Gallery bg-white text-Shark" : " border-white bg-mineShaft text-white"} font_container`}
          >
            <List
              content="serif"
              css="font_option pt-3 font-serif"
              onclick={() => handleOptionClick("serif")}
            />
            <List
              content="sans-serif"
              css="font_option py-3 font-sans"
              onclick={() => handleOptionClick("sans-serif")}
            />
            <List
              content="mono"
              css="font_option pb-3 font-mono"
              onclick={() => handleOptionClick("mono")}
            />
          </ul>
        )}
      </div>
    </>
  );
};

export default Component;
