import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MainImage = ({ image }) => {
  //console.log(image);
  return (
    <GatsbyImage
      className="main-image"
      image={getImage(image.localFile.childImageSharp.gatsbyImageData)}
      alt={image?.alternativeText}
    />
  );
};

export default MainImage;
