import { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Component = () => {
  const [isLoading] = useState(true);
  const [color] = useState<string>("#7D2CF2");
  return (
    <>
      <PulseLoader
        color={color}
        loading={isLoading}
        size={15}
        aria-label="Loading data"
      />
    </>
  );
};

export default Component;
