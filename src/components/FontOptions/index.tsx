import { useState } from "react";
import useTheme from "../../hook/useTheme";
import IconDownArrow from "../../icons/IconDownArrow";
import List from "../../typographies/List";

const Component = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFont, setSelectedFont] = useState("serif");

  const handleOptionClick = (font: string) => {
    setSelectedFont(font);
    setIsOpen(false);
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
              css="font_option pt-3"
              onclick={() => handleOptionClick("serif")}
            />
            <List
              content="sans-serif"
              css="font_option py-3"
              onclick={() => handleOptionClick("sans-serif")}
            />
            <List
              content="mono"
              css="font_option pb-3"
              onclick={() => handleOptionClick("mono")}
            />
          </ul>
        )}
      </div>
    </>
  );
};

export default Component;

{
  /* <select
        id=""
        className={`${theme == false ? "bg-white text-Shark" : "bg-mineShaft text-white "} text-center capitalize outline-none `}
      >
        <option>serif</option>
        <option>sans-serif</option>
        <option>mono</option>
      </select> */
}
