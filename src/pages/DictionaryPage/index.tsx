import Header from "../../components/Header";
import SearchContainer from "../../container/SearchContainer";
import useTheme from "../../hook/useTheme";

const Page = () => {
  const { theme } = useTheme();
  return (
    <>
      <header className="mx-8 mt-6 flex flex-shrink-0 justify-center lg:mx-0 lg:mt-10">
        <Header />
      </header>
      <main className="mx-8 flex-1 lg:mx-0">
        <SearchContainer />
      </main>
      <footer className=" mb-4 mt-20 flex flex-shrink-0 justify-center">
        <p
          className={`${theme == false ? "text-Shark" : "text-white"} mb-4 text-sm`}
        >
          Application coded by{" "}
          <a
            href="https://github.com/JodieAddis"
            target="_blank"
            className="hover:font-bold hover:text-ElectricViolet"
          >
            Jodie Addis
          </a>
        </p>
      </footer>
    </>
  );
};

export default Page;
