/*MODULES*/
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

/*COMPONENTS*/
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeaderHome from "../components/header-home"
import Card from "../components/card"

/*ESTILOS*/
import "../assets/css/home.css"

/*IMAGES*/
import Image1 from "../assets/images/mental-health.webp"
import Image2 from "../assets/images/friends-happiness.webp"
import Image3 from "../assets/images/love-romance.webp"
import PostGrid from "../components/posts-grid"

const cardContent = [
  {
    title: "Mental health tips",
    description:
      " Learn to manage your emotions, overcome your fears, and improve your self-esteem",
    image: {
      src: Image1,
      alt: "Mental health tips",
    },
  },

  {
    title: "Social relationships tips",
    description:
      "Discover how to strengthen your bonds and create healthy relationships with friends and loved ones.",
    image: {
      src: Image2,
      alt: "Social relationships tips",
    },
  },
  {
    title: "Experiences and stories about love",
    description:
      "Read love stories and discover practical tips for finding love in your life.",
    image: {
      src: Image3,
      alt: "Experiences and stories about love",
    },
  },
]

const Head = () => (
  <>
    <meta
      name="google-site-verification"
      content="z_dA9qmqPOWj0YULy1jFOA0pV2icqoybYn7DbbE1NbM"
    />
  </>
)
export default function Home() {
  const data = useStaticQuery(graphql`
    query homeMetadata {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
      allStrapiArticle(limit: 20) {
        edges {
          node {
            category {
              name
            }
            title
            thumbnail {
              alternativeText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, width: 400, height: 280)
                }
              }
            }
            description
            slug
          }
        }
      }
    }
  `)
  const { title, description } = data.site.siteMetadata
  const articles = data.allStrapiArticle.edges

  return (
    <Layout>
      <Seo
        title={title}
        description={description}
        other={{
          name: "google-site-verification",
          content: "z_dA9qmqPOWj0YULy1jFOA0pV2icqoybYn7DbbE1NbM",
        }}
      />
      <HeaderHome title={title} />
      <section className="section-cards">
        {cardContent.map((el, index) => {
          return (
            <Card
              title={el.title}
              description={el.description}
              image={el.image}
              key={index}
            />
          )
        })}
      </section>
      <h2 className="last-posts">LAST POSTS</h2>
      <PostGrid articles={articles} />
    </Layout>
  )
}
