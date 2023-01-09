import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const PostGrid = ({ articles }) => {
  console.log(articles);
  return (
    <section className="grid-post">
      {articles.map((el, index) => {
        const slug = el.node?.slug ? `/${el.node?.slug}` : `/${el.slug}`;
        const image = getImage(
          el.node?.thumbnail.localFile.childImageSharp.gatsbyImageData
            ? el.node.thumbnail.localFile.childImageSharp.gatsbyImageData
            : el.thumbnail.localFile.childImageSharp.gatsbyImageData
        );

        return (
          <Link to={slug} className="card-post" key={index}>
            <h3 className="title">{el.node?.title || el.title}</h3>
            <p className="description">
              {(el.node?.description.length > 150
                ? el.node?.description.slice(0, 150) + "..."
                : el.node?.description) ||
                (el.description.length > 150
                  ? el.description.slice(0, 150) + "..."
                  : el.description)}
            </p>
            {el.node?.category.name && (
              <p className="category">{el.node.category.name}</p>
            )}
            <GatsbyImage
              image={image}
              alt={
                el.node?.thumbnail.alternativeText ||
                el.thumbnail.alternativeText
              }
            />
          </Link>
        );
      })}
    </section>
  );
};

export default PostGrid;
