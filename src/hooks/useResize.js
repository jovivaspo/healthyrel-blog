import { useEffect, useState } from "react";

const useResize = () => {
  const [size, setSize] = useState();

  const handleResize = () => {
    const width = window.innerWidth;
    setSize(width);
  };

  useEffect(() => {
    setSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export { useResize };
