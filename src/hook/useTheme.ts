import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const useTheme = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("Context error");
  }
  return context;
};

export default useTheme;
