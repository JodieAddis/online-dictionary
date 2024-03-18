import { ReactNode, createContext, useState } from "react";

interface DarkModeContextType {
  theme: boolean;
  toggleTheme: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

//Création du context:
export const DarkModeContext = createContext<DarkModeContextType>({
  theme: false,
  toggleTheme: () => {},
});

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<boolean>(false); //false = mis sur clair par défaut

  const toggleTheme = (): void => {
    setTheme(!theme);
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
