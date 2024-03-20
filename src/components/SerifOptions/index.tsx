import useTheme from "../../hook/useTheme";

const Component = () => {
  const { theme } = useTheme();

  return (
    <>
      <select
        name=""
        id=""
        className={`${theme == false ? "bg-white text-Shark" : "bg-mineShaft text-white "} outline-none `}
      >
        <option value="">serif</option>
        <option value="">sans-serif</option>
        <option value="">mono</option>
      </select>
    </>
  );
};

export default Component;
