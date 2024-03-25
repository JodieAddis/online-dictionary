import useTheme from "../../hook/useTheme";
import IconMoon from "../../icons/IconMoon";

const Component = () => {
  const { toggleTheme } = useTheme();
  return (
    <>
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          onClick={() => {
            toggleTheme();
          }}
        />
        <div className="relative mr-3 h-6 w-11 rounded-full bg-ElectricViolet after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-Scorpion peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
        <IconMoon />
      </label>
    </>
  );
};

export default Component;
