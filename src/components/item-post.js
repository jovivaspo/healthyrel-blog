/*MODULES*/
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"

const ItemPost = ({ post }) => {
  return (
    <div className="item-post">
      <Link to={`/${post.slug}`}>
        <GatsbyImage
          class="image-item-post"
          image={getImage(
            post.thumbnail.localFile.childImageSharp.gatsbyImageData
          )}
          alt={post.thumbnail.alternativeText}
        />
        <div className="container-text">
          <h4>{post.title}</h4>
        </div>
      </Link>
    </div>
  )
}

export default ItemPost
