import Header from "../../components/Header";
import SearchContainer from "../../container/SearchContainer";
import useTheme from "../../hook/useTheme";

const Page = () => {
  const { theme } = useTheme();
  return (
    <>
      <header className="mx-8 mt-6 flex justify-center lg:mx-0 lg:mt-10">
        <Header />
      </header>
      <main className="mx-8 flex flex-col justify-center lg:mx-0">
        <SearchContainer />
      </main>
      <footer className="mb-4 mt-20 flex justify-center">
        <p
          className={`${theme == false ? "text-Shark" : "text-white"} text-sm`}
        >
          Coder par Jodie Addis
        </p>
      </footer>
    </>
  );
};
export default Page;
