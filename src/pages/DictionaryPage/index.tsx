import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchContainer from "../../container/SearchContainer";

const Page = () => {
  return (
    <>
      <header className="mx-8 mt-6 flex flex-shrink-0 justify-center lg:mx-0 lg:mt-10">
        <Header />
      </header>
      <main className="mx-8 flex-1 lg:mx-0">
        <SearchContainer />
      </main>
      <footer className=" mb-4 mt-20 flex flex-shrink-0 justify-center">
        <Footer />
      </footer>
    </>
  );
};

export default Page;
