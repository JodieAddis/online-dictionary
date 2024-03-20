import { ReactNode, createContext, useEffect, useState } from "react";

interface DarkModeContextType {
  theme: boolean;
  toggleTheme: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  theme: false,
  toggleTheme: () => {},
});

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setTheme((prevTheme) => !prevTheme);
  };

  theme
    ? document.body.classList.add("bg-mineShaft")
    : document.body.classList.remove("bg-mineShaft");

  // useEffect(() => {
  //   const systemsSettings = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (systemsSettings.matches) setTheme(true);
  //   systemsSettings.addEventListener("change", (e) => setTheme(e.matches));
  // }, []);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
