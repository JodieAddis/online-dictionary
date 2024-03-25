import useTheme from "../../hook/useTheme";
import IconLogo from "../../icons/IconLogo";
import FontOptions from "../FontOptions";
import ToggleButton from "../ToggleButton";

const Component = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`text-Black flex w-full justify-between ${theme === false ? "bg-White" : "bg-mineShaft"} lg:w-3/6 lg:p-4 lg:py-4`}
    >
      <div>
        <IconLogo />
      </div>
      <div className="flex flex-row">
        <FontOptions />
        <div
          className={`${theme == false ? "bg-SilverChalice" : "bg-white"} mx-2 h-6 w-[2px] self-center  lg:mx-4`}
        ></div>
        <ToggleButton />
      </div>
    </div>
  );
};

export default Component;
