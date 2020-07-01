import React from "react"
import { navigate } from "gatsby"

export default function MenuItem(props) {
  const styles = {
    ...props.styles,
    top: props.top,
  }

  const handleLinkClick = () => {
    navigate(props.route)
    console.log(props.route)
  }

  return (
    <li
      className={`mobile-menu-global mobile-menu-middle ${
        props.menuOpen ? "mobile-menu-middle-expand expand" : ""
      }`}
      style={props.menuOpen ? styles : {}}
      onClick={handleLinkClick}
    >
      <span
        className={`mobile-menu-text ${
          props.menuOpen ? "mobile-menu-text-expand" : ""
        }`}
      >
        {props.title}
      </span>
    </li>
  )
}
