import React, { useEffect, useState, useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AOS from "aos"
import "aos/dist/aos.css"

import Header from "./header"
import Footer from "./Footer"
import "./layout.scss"
import "bootstrap/dist/css/bootstrap.css"
import RodalCustom from "../common/RodalCustom"
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from "../../context/GlobalContextProvider"
import DonateRodalContent from "../common/DonateRodalConent"

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

  // Did Mount
  let AOS
  useEffect(() => {
    const AOS = require("aos")
    AOS.init({
      once: true,
    })
  }, [])

  // Did Update
  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  const toggleDonate = () => {
    dispatch({ type: "TOGGLE_DONATE" })
  }

  // Global state
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)

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
      <RodalCustom
        open={state.donateOpen}
        toggle={toggleDonate}
        content={<DonateRodalContent />}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
