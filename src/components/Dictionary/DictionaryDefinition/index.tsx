import { useFetch } from "../../../hook/useFetch";

const Component = () => {
  const { data, error } = useFetch("cat");
  return (
    <div className="mt-8 lg:mt-6">
      {data &&
        data[0].meanings.map((meaning, index) => (
          <div key={index}>
            <div className=" flex flex-row">
              <p className="mr-4 text-xl font-bold italic text-Shark">
                {meaning.partOfSpeech}
              </p>
              <div className="flex h-[1px] w-full self-center rounded-full bg-SilverChalice"></div>
            </div>
            <ul className="my-4">
              <p className="text-lg font-bold capitalize text-SilverChalice">
                meaning
              </p>
              {meaning.definitions.map((definition, index) => (
                <ul
                  key={index}
                  className="text-Shark marker:text-ElectricViolet"
                >
                  <li className="font-base my-2 ml-5 list-disc pl-3 lg:ml-10">
                    {definition.definition}
                  </li>
                </ul>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Component;
