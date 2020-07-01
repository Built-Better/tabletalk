import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ServiceCard from "../components/services/ServiceCard"
import ConsultingSVG from "../images/consulting.svg"
import FacilitationSVG from "../images/facilitation.svg"
import Button from "../components/common/Button"

export default function Services() {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      bbschema {
        section(key: "service_cards") {
          content
        }
      }
    }
  `).bbschema.section

  return (
    <Layout>
      <SEO title="Services" />
      <div className="container default-container">
        <h1>SERVICES</h1>
        <ServiceCard
          title={data.content.service_1_title}
          body={data.content.service_1_body}
          imgSrc={data.content.service_1_image.url}
          icon={ConsultingSVG}
        />
        <ServiceCard
          title={data.content.service_2_title}
          body={data.content.service_2_body}
          imgSrc={data.content.service_2_image.url}
          icon={FacilitationSVG}
          leftAligned={true}
        />
        <div className="text-center mt-5 mb-1">
          <Button
            type="primary"
            size="large"
            title="Inquire Today"
            externalLink="mailto:thisistabletalk@gmail.com"
          />
        </div>
      </div>
    </Layout>
  )
}
