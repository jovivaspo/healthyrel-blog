/*MODULES*/
import React from "react";
/*COMPONENTS*/
import Title from "./title";
import Tag from "./tag";
import MainImage from "./main-image";
/*CSS*/
import "../assets/css/header.css";
import AuthorDate from "./author-date";

const Header = ({ title, image, tags, author, publishedAt }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="container-tags">
          {tags.name ? (
            <Tag tag={tags} />
          ) : (
            tags.map((tag, index) => {
              return <Tag tag={tag} key={index} />;
            })
          )}
        </div>
        <Title title={title} />
        <AuthorDate author={author} publishedAt={publishedAt} />
      </div>
      <MainImage image={image} />
    </header>
  );
};

export default Header;
