import { useState, CSSProperties } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Component = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState<string>("#7D2CF2");
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
