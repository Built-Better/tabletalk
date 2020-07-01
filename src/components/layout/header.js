import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import "./layout.scss"
import "./header.scss"
import LogoSVG from "../../images/nav_logo.svg"
import MobileMenu from "./mobileMenu/mobilemenu"
import Button from "../common/Button"

const Header = ({ siteTitle }) => {
  const handleDonateClick = () => {
    console.log("donate!")
  }

  return (
    <header>
      <div className="nav container">
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
          <Button
            type="secondary"
            title="Donate"
            handleClick={handleDonateClick}
          />
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
