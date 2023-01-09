/*MODULES*/
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import React from "react";

const ItemPost = ({ post }) => {
  const imageToRender = getImage(
    post.thumbnail.localFile.childImageSharp.gatsbyImageData
  );
  return (
    <div className="item-post">
      <Link to={`/${post.slug}`}>
        <GatsbyImage
          class="image-item-post"
          image={imageToRender}
          alt={post.thumbnail.alternativeText}
        />
        <div className="container-text">
          <h4>{post.title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default ItemPost;
