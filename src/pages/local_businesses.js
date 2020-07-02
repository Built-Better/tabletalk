import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import BusinessGrid from "../components/local-businesses/BusinessGrid"

const LocalBusinesses = () => (
  <Layout>
    <SEO title="Local Businesses" />
    <div className="container default-container">
      <h1>LOCAL BUSINESSES</h1>
      <BusinessGrid />
    </div>
  </Layout>
)

export default LocalBusinesses
