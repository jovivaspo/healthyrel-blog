import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import "../assets/css/last-posts.css";
import ItemPost from "./item-post";

const LastPosts = () => {
  const result = useStaticQuery(query);
  const lastPosts = result.allStrapiArticle.nodes;

  return (
    <div className="container-last-posts">
      <h3>Last Posts</h3>
      <div className="container-post">
        {lastPosts.map((post, index) => {
          return <ItemPost post={post} key={index} />;
        })}
      </div>
    </div>
  );
};

export default LastPosts;

const query = graphql`
  query lastPost {
    allStrapiArticle(limit: 2, sort: { order: DESC, fields: createdAt }) {
      nodes {
        title
        slug
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 360, height: 220)
            }
          }
        }
      }
    }
  }
`;
