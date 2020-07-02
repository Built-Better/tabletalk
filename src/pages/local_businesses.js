import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import BusinessGrid from "../components/local-businesses/BusinessGrid"
import { createMarkup } from "../utililties/helper_functions/content_manipulations"

export default function LocalBusinesses() {
  const data = useStaticQuery(graphql`
    query LocalBusinessQuery {
      bbschema {
        section(key: "about_section") {
          content
        }
      }
    }
  `).bbschema.section

  return (
    <Layout>
      <SEO title="Local Businesses" />
      <div className="container default-container">
        <h1 data-aos="fade-up" data-aos-duration="750">
          LOCAL BUSINESSES
        </h1>
        <div
          className="mt-5"
          dangerouslySetInnerHTML={createMarkup(data.content.about)}
          data-aos="fade-up"
          data-aos-duration="750"
        ></div>
        <BusinessGrid />
      </div>
    </Layout>
  )
}
