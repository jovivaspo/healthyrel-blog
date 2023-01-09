/*MODULES*/
import React from "react";
import getDate from "../services/get-date";
/*CSS*/
import "../assets/css/author-date.css";

const AuthorDate = ({ author, publishedAt }) => {
  return (
    <div className="container-detail">
      <span className="date">Posted on {getDate(publishedAt)}</span>
      <span className="author">by {author.name}</span>
    </div>
  );
};

export default AuthorDate;
