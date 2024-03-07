import DictionaryMeaning from "../components/DictionaryMeaning";
import Header from "../components/Header";
import InputText from "../components/InputText";

const Page = () => (
  <>
    <header className="mt-10 flex justify-center">
      <Header />
    </header>
    <main className="flex flex-col justify-center">
      <InputText />
      <DictionaryMeaning />
    </main>
    <footer className="mb-4 mt-20 flex justify-center">
      <p className="text-sm">Coder par Jodie Addis</p>
    </footer>
  </>
);

export default Page;
