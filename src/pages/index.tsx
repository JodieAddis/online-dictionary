import DictionaryMeaning from "../components/DictionaryMeaning";
import Header from "../components/Header";

const Page = () => (
  <>
    <header className="mt-10 flex justify-center">
      <Header />
    </header>
    <main className="flex justify-center">
      <DictionaryMeaning />
    </main>
    <footer className="flex justify-center">
      <p className="text-sm">Coder par Jodie Addis</p>
    </footer>
  </>
);

export default Page;
