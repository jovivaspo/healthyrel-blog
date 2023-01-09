import React from "react";
import { useEffect } from "react";

const usePosition = (ref) => {
  const [position, setPostion] = React.useState({});

  useEffect(() => {
    const handlerPosition = () => {
      setPostion({
        x: ref.current.getBoundingClientRect().x,
        width: ref.current.getBoundingClientRect().width,
      });
    };
    handlerPosition();
    window.addEventListener("resize", handlerPosition);
    return () => window.removeEventListener("resize", handlerPosition);
  }, [ref.current]);

  return position;
};

export { usePosition };
