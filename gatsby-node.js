
const path = require(`path`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query MyPostQuery {
      allStrapiArticle {
        nodes {
          slug
        }
      }
      allStrapiCategory {
        nodes {
          name
        }
      }
    }
  `);

  const articles = result.data.allStrapiArticle.nodes;
  const categories = result.data.allStrapiCategory.nodes;

  articles.forEach((post) => {
    createPage({
      path: post.slug,
      component: path.resolve("src/templates/post-template.js"),
      context: {
        slug: post.slug,
      },
    });
  });

  categories.forEach((category) => {
    createPage({
      path: category.name,
      component: path.resolve("src/templates/category-template.js"),
      context: {
        name: category.name,
      },
    });
  });
};
