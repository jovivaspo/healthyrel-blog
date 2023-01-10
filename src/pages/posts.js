import React from 'react';
import Layout from '../components/layout';
import ItemPost from '../components/item-post';
import { graphql, useStaticQuery } from "gatsby";

const Posts = () => {
    const results = useStaticQuery(query);
    const posts = results.allStrapiCategory.nodes;
    console.log(posts)
    return (
        <Layout>
            <article className="full-content">
                <section className="post-content">
                    <h1>POSTS</h1>
                    <p>
                        On this page you will find the latest posts from the different categories of Healthyrel: Dating, Physical Intimicy, Breakups, Friendship, Compatibility, Gender and Sexuality, Relationship Advice, Love, Relationship Problems and Single Life.
                    </p>
                    {posts.map(category => (
                        <>
                            <h2>{category.name}</h2>
                            <div className='container-post'>
                                {category.articles.length > 0?
                                category.articles.map((article, index) => (
                                   <ItemPost post={article} key={index} />
                                )) :
                                <p>There are no posts for this category</p>
                            
                            }
                            </div>
                        </>
                    ))}

                </section>
            </article>
        </Layout>
    )
}

export default Posts

const query = graphql`
  query Posts {
    allStrapiCategory {
        nodes {
          name
          articles {
            slug
            title
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
  }
`;
