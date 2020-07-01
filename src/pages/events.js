import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Calendar from "../components/events/Calendar"

const EventsPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="container default-container">
        <h1 className="mb-5">EVENTS</h1>
        <Calendar />
      </div>
    </Layout>
  )
}

export default EventsPage
