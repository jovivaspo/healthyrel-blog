import React from "react";
import "../assets/css/tag.css";

const Tag = ({ tag }) => {
  return (
    <div className="container-tag background-color">
      <p>{tag.name}</p>
    </div>
  );
};

export default Tag;
