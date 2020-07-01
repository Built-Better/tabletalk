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
      <h1>Contact</h1>
      <ContactForm />
      <GoogleMap />
      <Territory />
      <ContactInfo />
    </div>
  </Layout>
)

export default Contact
