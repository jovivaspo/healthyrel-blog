/*MODULES*/
import React from "react";
import { useEffect } from "react";

/*COMPONENTS*/

/*CSS*/
import "../assets/css/menu-icon.css";

const MenuIcon = React.forwardRef((props, ref) => {
  const { isActive, handlerActive, color } = props;
  const barRef = React.useRef();
  const XRef = React.useRef();

  useEffect(() => {
    if (isActive) {
      barRef.current.classList.add("hidden");
      XRef.current.classList.remove("hidden");
    } else {
      barRef.current.classList.remove("hidden");
      XRef.current.classList.add("hidden");
    }
  }, [isActive]);

  return (
    <button ref={ref} className="menu-btn" onClick={handlerActive}>
      <svg
        ref={barRef}
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-menu-2 menu-icon bars"
        width={42}
        height={42}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        ref={XRef}
        rotate="90deg"
        className="menu-icon X hidden"
        width="42"
        height="42"
        stroke={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill={color}
            d="M10.858 12.272l15.87 15.87.756.756 1.414-1.414-.756-.756-15.87-15.87-.756-.756-1.414 1.414z"
          ></path>
          <path
            fill={color}
            d="M28.142 12.272l-15.87 15.87-.756.756-1.414-1.414.756-.756 15.87-15.87.756-.756 1.414 1.414z"
          ></path>
        </g>
      </svg>
    </button>
  );
});

export default MenuIcon;
