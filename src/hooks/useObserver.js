/*MODULES*/
import React from "react";

const options = {
  rootMargin: "-80px 0px -200px 0px",
  threshold: 1,
};

const useObserver = (targets, clickInLink) => {
  const observer = React.useRef();
  const [headingsActive, setHeadingsAtctives] = React.useState([]);

  React.useEffect(() => {
    if (!clickInLink.click) {
      let snapshot = headingsActive;
      const handlerObserver = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !snapshot.includes(entry.target)) {
            snapshot = [...snapshot, entry.target];
          }
          if (!entry.isIntersecting && snapshot.includes(entry.target)) {
            snapshot = snapshot.filter((el) => el !== entry.target);
          }
        });
        if (snapshot.length !== 0) {
          setHeadingsAtctives(snapshot);
        }
      };
      observer.current?.disconnect();
      observer.current = new IntersectionObserver(handlerObserver, options);

      const stateElements = Array.from(targets).forEach((el) => {
        observer.current.observe(el);
      });

      return () => observer.current?.disconnect();
    }
  }, [targets, options]);

  return headingsActive;
};

export { useObserver };
