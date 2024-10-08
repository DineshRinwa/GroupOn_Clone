import { useState } from "react";
import { createContext } from "react";

export const HoverContext = createContext();

export const HoverContextProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverName, setHoverName] = useState(null);
  const [openCart, setOpenCart] = useState(false);
  const [nameOfCart, setNameOfCart] = useState(null);
  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, hoverName, setHoverName, openCart, setOpenCart, nameOfCart, setNameOfCart}}>
      {children}
    </HoverContext.Provider>
  );
};
