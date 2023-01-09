/*MODULES*/
import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
/*COMPONENTS*/

/*CSS*/
import "../assets/css/block-image.css";

const Image = ({ data }) => {
  return (
    <div className="image-container">
      <GatsbyImage
        className="image-content"
        image={getImage(data.image.localFile.childImageSharp.gatsbyImageData)}
        alt={data.alternativeText}
      />
    </div>
  );
};

export default Image;
