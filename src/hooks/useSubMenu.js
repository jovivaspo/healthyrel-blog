import { useState } from "react";
export const useSubMenu = () => {
  const [isActiveSubMenu, setIsActiveSubMenu] = useState(false);

  const handlerActiveSubMenu = () => {
    setIsActiveSubMenu(!isActiveSubMenu);
  };

  return { isActiveSubMenu, handlerActiveSubMenu };
};
