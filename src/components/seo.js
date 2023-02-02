import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, other }) => {
  if (other) {
    return (
      <Helmet
        title={title}
        meta={[
          { name: "description", content: description },
          { name: other.name, content: other.content },
        ]}
        link={[
          {
            rel: "sitemap",
            type: "application/xml",
            href: "/healthyrel-blog/sitemap-index.xml",
          },
        ]}
      />
    )
  } else {
    return (
      <Helmet
        title={title}
        meta={[{ name: "description", content: description }]}
        link={[
          {
            rel: "sitemap",
            type: "application/xml",
            href: "/sitemap-index.xml",
          },
        ]}
      />
    )
  }
}

export default Seo
