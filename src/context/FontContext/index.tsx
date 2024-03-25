import React, { createContext, ReactNode, useState } from "react";

export type FontType = "serif" | "sans-serif" | "mono";

const class_serif = "font-txt-serif";
const class_sans_serif = "font-txt-sans";
const class_mono = "font-text-mono";

interface FontContextType {
  font: FontType;
  setFont: (font: FontType) => void;
}

interface FontProviderProps {
  children: ReactNode;
}

export const FontContext = createContext<FontContextType>({
  font: "serif",
  setFont: () => {},
});

export const FontProvider: React.FC<FontProviderProps> = ({ children }) => {
  const [font, setFont] = useState<FontType>("serif"); //Valeur par défaut sur serif

  const handleSetFont = (selectedFont: FontType) => {
    setFont(selectedFont);
    document.body.classList.remove(class_serif, class_sans_serif, class_mono);
    switch (selectedFont) {
      case "serif":
        document.body.classList.add(class_serif);
        break;
      case "sans-serif":
        document.body.classList.add(class_sans_serif);
        break;
      case "mono":
        document.body.classList.add(class_mono);
        break;
      default:
        document.body.classList.add(class_serif);
        break;
    }
  };

  const contextValue: FontContextType = {
    font,
    setFont: handleSetFont,
  };

  return (
    <FontContext.Provider value={contextValue}>{children}</FontContext.Provider>
  );
};
