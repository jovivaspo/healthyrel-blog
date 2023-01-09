/*MODULES*/
import React from "react";
import { graphql } from "gatsby";
/*COMPONENTS*/
import Layout from "../components/layout";
import PostGrid from "../components/posts-grid";

const categoryTemplate = ({ data }) => {
  const category =
    data.strapiCategory.articles.length > 0
      ? data.strapiCategory.articles[0].category
      : null;
  return (
    <Layout>
      <h2 className="last-posts">LAST POSTS</h2>
      {category ? (
        <PostGrid articles={data.strapiCategory.articles} />
      ) : (
        <h3>There isn't any article in this category</h3>
      )}
    </Layout>
  );
};

export default categoryTemplate;

export const query = graphql`
  query getArticles($name: String) {
    strapiCategory(name: { eq: $name }) {
      articles {
        category {
          name
        }
        slug
        title
        description
        thumbnail {
          alternativeText
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 400, height: 280)
            }
          }
        }
      }
    }
  }
`;
