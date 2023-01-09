import React from "react";
import "../assets/css/sidebar.css";
import { useObserver } from "../hooks/useObserver";
import ItemTableContent from "./item-table-content";

const TableContent = ({ blocks }) => {
  const tableRef = React.useRef();
  const [titles, setTitles] = React.useState([]);
  const [headings, setHeadings] = React.useState([]);
  const [height, setHeight] = React.useState([]);
  const [clickInLink, setClickInLink] = React.useState({
    click: false,
    element: null,
  });

  React.useEffect(() => {
    setHeadings(document.querySelectorAll("h2"));
  }, []);

  React.useEffect(() => {
    /* setTitles(
      ...titles,
      ...blocks
        .map((block) => {
          if (
            block.strapi_component === "shared.rich-text" &&
            block.body.data.childMarkdownRemark.tableOfContents.length > 0
          ) {
            return block.body.data.childMarkdownRemark.tableOfContents.match(
              /<a(.*?)<\/a>/g
            );
          }
        })
        .filter((block) => block !== undefined)
    );*/
    setTitles(
      Array.from(headings).map((heading) => ({
        id: heading.id,
        text: heading.innerText,
      }))
    );
  }, [headings]);

  const headingsActive = useObserver(headings, clickInLink);

  React.useEffect(() => {
    if (tableRef.current.scrollHeight > 400 && clickInLink.click === false) {
      const index = Math.min(
        ...headingsActive.map((el) => {
          return Array.from(headings).indexOf(el);
        })
      );
      if (tableRef.current.childNodes.length > 0 && index !== Infinity) {
        let scrollHeight = 0;
        for (let i = 0; i <= index - 1; i++) {
          scrollHeight +=
            tableRef.current.childNodes[i].getBoundingClientRect().height;
        }
        setHeight(scrollHeight);
      }
    }
  }, [tableRef.current, headingsActive, clickInLink]);

  React.useEffect(() => {
    tableRef.current.scrollTop = height;
  }, [height]);

  React.useEffect(() => {
    if (clickInLink?.click) {
      const heightWindow = window.screen.availHeight;
      const heightElement = clickInLink.element.getBoundingClientRect().height;

      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          const timeToWait = setTimeout(() => {
            setClickInLink({ click: false, element: null });
          }, 800);
          if (entry.isIntersecting) {
            clearTimeout(timeToWait);
            setClickInLink({ click: false, element: null });
          }
        },
        {
          root: null,
          rootMargin: `-80px 0px -${heightWindow - 80 + heightElement}px 0px`,
          threshold: 1,
        }
      );
      observer.observe(clickInLink.element);
      return () => observer.unobserve(clickInLink.element);
    }
  }, [clickInLink]);

  const handlerClick = (e) => {
    if (e.target.matches("li")) {
      return false;
    }

    const contentElement = e.target.innerText;

    const [element] = Array.from(headings).filter(
      (el) => el.innerText === contentElement
    );

    setClickInLink({ click: true, element });
  };

  console.log(headings);

  return (
    <aside className="sidebar">
      <h3>Table of Contents</h3>
      <div className="table-content" ref={tableRef}>
        {titles?.map((title, index) => (
          <ItemTableContent
            title={title}
            key={index}
            headingsActive={headingsActive}
            handlerClick={handlerClick}
          />
        ))}
      </div>
    </aside>
  );
};

export default TableContent;

//
