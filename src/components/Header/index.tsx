import IconLogo from "../../icons/IconLogo";
import IconMoon from "../../icons/IconMoon";
import SerifOptions from "../SerifOptions";

const Component = () => {
  return (
    <div className="text-Black flex w-full justify-between  lg:w-3/6 lg:p-4 lg:py-4">
      <div>
        <IconLogo />
      </div>
      <div className="flex flex-row">
        <SerifOptions />
        <div className="item-center mx-2 h-6 w-[2px] bg-CodGray lg:mx-4"></div>
        <IconMoon />
      </div>
    </div>
  );
};

export default Component;
