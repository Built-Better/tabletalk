import React, { useState, useLayoutEffect, useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./layout.scss"
import "./header.scss"
import LogoSVG from "../../images/nav_logo.svg"
import MobileMenu from "./mobileMenu/mobilemenu"
import Button from "../common/Button"
import { GlobalDispatchContext } from "../../context/GlobalContextProvider"

const Header = ({ siteTitle }) => {
  // Global state dispatch
  const dispatch = useContext(GlobalDispatchContext)

  // On scroll collapse trigger
  const [collapse, setCollapsed] = useState(false)

  useLayoutEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset
      if (collapse && offset <= 100) {
        setCollapsed(false)
      } else if (offset > 100) {
        setCollapsed(true)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [collapse])

  const handleDonateClick = () => {
    dispatch({ type: "TOGGLE_DONATE" })
  }

  let header_class = ""
  if (collapse) header_class = "collapse-nav"

  return (
    <header className={header_class}>
      <div
        className="nav container"
        data-aos="fade-down"
        data-aos-duration="750"
      >
        <Link to="/" className="logo-container">
          <img src={LogoSVG} alt="table talk logo" />
          <h3 className="pl-3 body-font">THIS IS TABLE TALK</h3>
        </Link>
        <span className="menu">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/services">Services</Link>
          <Link to="/local_businesses">Local Businesses</Link>
          <Link to="/contact">Contact</Link>
          {/* <Button
            type="secondary"
            title="Donate"
            handleClick={handleDonateClick}
          /> */}
        </span>
        <MobileMenu />
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
