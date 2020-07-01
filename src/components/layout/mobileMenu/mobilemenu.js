import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

import "./mobilemenu.scss"
import MenuItem from "./MenuItem"

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(undefined)
  const [windowHeight, setWindowHeight] = useState(undefined)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    if (window.innerWidth !== windowWidth) setWindowWidth(window.innerWidth)
    if (window.innerHeight !== windowHeight) setWindowHeight(window.innerHeight)
  })

  const menuStyle = {
    width: windowWidth,
    left: `-${windowWidth - 70}px`,
    height: windowHeight / 6,
  }

  return (
    <div className="mobile-menu-container" style={menuOpen ? { top: "0" } : {}}>
      <ul className="mobile-menu" onClick={toggleMenu}>
        <div
          className={`mobile-menu-close fa fa-close ${
            menuOpen ? "mobile-menu-close-visible" : ""
          }`}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <Link to="/">
          <li
            className={`mobile-menu-global mobile-menu-top ${
              menuOpen ? "mobile-menu-top-expand expand" : ""
            }`}
            style={menuOpen ? menuStyle : {}}
          >
            <span
              className={`mobile-menu-text ${
                menuOpen ? "mobile-menu-text-expand" : ""
              }`}
            >
              Home
            </span>
          </li>
        </Link>
        <MenuItem
          menuOpen={menuOpen}
          styles={menuStyle}
          top={menuStyle.height}
          title="Events"
          route="/events"
        />
        <MenuItem
          menuOpen={menuOpen}
          styles={menuStyle}
          top={menuStyle.height * 2}
          title="Services"
          route="/services"
        />
        <MenuItem
          menuOpen={menuOpen}
          styles={menuStyle}
          top={menuStyle.height * 3}
          title="Local Businesses"
          route="/local_businesses"
        />
        <MenuItem
          menuOpen={menuOpen}
          styles={menuStyle}
          top={menuStyle.height * 4}
          title="Contact"
          route="/contact"
        />
        <li
          className={`mobile-menu-global mobile-menu-bottom ${
            menuOpen ? "mobile-menu-bottom-expand expand" : ""
          }`}
          style={menuOpen ? { ...menuStyle, top: menuStyle.height * 5 } : {}}
        >
          <span
            className={`mobile-menu-text ${
              menuOpen ? "mobile-menu-text-expand" : ""
            }`}
          >
            Donate
          </span>
        </li>
      </ul>
    </div>
  )
}
