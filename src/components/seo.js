import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  return (
    <Helmet
      title={title}
      meta={[{ name: "description", content: `${description}` }]}
      link={[
        {
          rel: "sitemap",
          type: "application/xml",
          href: "/healthyrel-blog/sitemap-index.xml",
        },
      ]}
    />
  )
}

export default Seo
