import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Banner from "../components/landing/Banner"
import About from "../components/landing/About"
import Team from "../components/landing/Team/Team"
import HowItWorks from "../components/landing/HowItWorks"
import IGFeed from "../components/landing/IGFeed"

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <About />
      <Team />
      <HowItWorks />
      <IGFeed />
    </Layout>
  )
}

export default IndexPage
