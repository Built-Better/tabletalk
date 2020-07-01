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
        <h1
          data-aos="zoom-in"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
        >
          {banner_data.banner_main_text}
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="750"
          data-aos-easing="ease-in-out"
        >
          {banner_data.banner_sub_text}
        </p>
      </div>
    </div>
  )
}
