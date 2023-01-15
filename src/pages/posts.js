import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import SlidePost from "../components/slide-posts"

const Posts = () => {
  const results = useStaticQuery(query)
  const posts = results.allStrapiCategory.nodes

  return (
    <Layout>
      <article className="full-content">
        <section className="post-content">
          <h1>POSTS</h1>
          <p>
            On this page you will find the latest posts from the different
            categories of Healthyrel: Dating, Physical Intimicy, Breakups,
            Friendship, Compatibility, Gender and Sexuality, Relationship
            Advice, Love, Relationship Problems and Single Life.
          </p>
          {posts.map(category => (
            <SlidePost data={category} />
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
                gatsbyImageData(layout: FIXED, width: 300, height: 200)
              }
            }
          }
        }
      }
    }
  }
`
