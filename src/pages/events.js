import React from "react"
import Loadable from "react-loadable"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const LoadableCallendar = Loadable({
  loader: () => import("../components/events/Calendar"),
  loading() {
    return <div></div>
  },
})

const EventsPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="container default-container"
        style={{ overflow: "hidden" }}
      >
        <h1 className="mb-5" data-aos="fade-up" data-aos-duration="750">
          EVENTS
        </h1>
        <div data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">
          <LoadableCallendar />
        </div>
      </div>
    </Layout>
  )
}

export default EventsPage
