import * as React from "react";

const Moon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-moon-stars"
    width={30}
    height={30}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="#222"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M0 0h24v24H0z" stroke="none" />
    <path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992zM17 4a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2M19 11h2m-1-1v2" />
  </svg>
);

export default Moon;
