import React from "react";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card-text">
        {" "}
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default Card;
