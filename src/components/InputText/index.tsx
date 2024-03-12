import IconSearch from "../../icons/IconSearch";

const Component = () => {
  return (
    <form action="" className="my-10 flex w-full self-center lg:w-3/6">
      <input
        type="text"
        placeholder="Search a word..."
        id="input-text"
        className="w-full rounded-l-lg bg-Gallery py-4 font-bold placeholder-SilverChalice placeholder:pl-5"
      />
      <button className="rounded-r-lg bg-Gallery pr-5">
        <IconSearch />
      </button>
    </form>
  );
};

export default Component;
