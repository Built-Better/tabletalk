import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Header from "./header"
import Footer from "./Footer"
import "./layout.scss"
import "bootstrap/dist/css/bootstrap.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bootstrap-overrides">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={10000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
