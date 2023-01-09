import React from "react";

const ArrowMenu = React.forwardRef((props, ref) => {
  const { handlerActiveSubMenu } = props;
  const handlerClick = () => {
    handlerActiveSubMenu();
  };
  return (
    <button className="button-submenu" onClick={handlerClick} ref={ref}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-caret-down arrow"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#164bc5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <path d="m6 9 6 6 6-6H6" />
      </svg>
    </button>
  );
});

export default ArrowMenu;
