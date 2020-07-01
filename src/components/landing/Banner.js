import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./Banner.scss"

export default function Banner() {
  const data = useStaticQuery(graphql`
    query BannerQuery {
      bbschema {
        section(key: "banner") {
          content
        }
      }
    }
  `)

  const banner_data = data.bbschema.section.content

  return (
    <div
      className="landing-banner"
      style={{ backgroundImage: `url(${banner_data.banner_image.url})` }}
    >
      <div className="banner-text">
        <h1>{banner_data.banner_main_text}</h1>
        <p>{banner_data.banner_sub_text}</p>
      </div>
    </div>
  )
}
