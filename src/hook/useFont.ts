import { useContext } from "react";
import { FontContext } from "../context/FontContext";

const useFont = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("Context error");
  }
  return context;
};

export default useFont;
