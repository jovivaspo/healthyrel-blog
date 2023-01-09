import React from "react";
import { Link } from "gatsby";

const ItemTableContent = ({ title, index, headingsActive, handlerClick }) => {
  const [isIntersection, setIstersectiong] = React.useState(false);
  const ref = React.useRef();
  React.useEffect(() => {
    headingsActive.map((el) => el.innerText).includes(ref.current.innerText)
      ? setIstersectiong(true)
      : setIstersectiong(false);
  }, [ref.current, headingsActive]);

  return (
    <li
      onClick={handlerClick}
      ref={ref}
      key={index}
      className={isIntersection && "isIntersecting"}
    >
      <Link to={`#${title.id}`}>{title.text}</Link>
    </li>
  );
};

export default ItemTableContent;
