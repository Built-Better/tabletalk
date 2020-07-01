import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import ContactForm from "../components/contact/ContactForm"
import GoogleMap from "../components/contact/GoogleMap"
import Territory from "../components/contact/Territory"
import ContactInfo from "../components/contact/ContactInfo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container default-container">
      <h1 data-aos="fade-up" data-aos-duration="750">
        CONTACT
      </h1>
      <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="750">
        <ContactForm />
      </div>
      <div data-aos="fade-up" data-aos-duration="750">
        <GoogleMap />
      </div>
      <div data-aos="fade-up" data-aos-duration="750">
        <Territory />
      </div>
      <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="750">
        <ContactInfo />
      </div>
    </div>
  </Layout>
)

export default Contact
