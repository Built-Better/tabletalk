import React from "react"
import { navigate } from "gatsby"

export default function MenuItem(props) {
  const styles = {
    ...props.styles,
    top: props.top + 1,
  }

  const handleLinkClick = () => {
    navigate(props.route)
  }

  const classes = `mobile-menu-global ${
    props.lastItem ? `mobile-menu-bottom` : `mobile-menu-middle`
  }`

  return (
    <li
      className={`${classes} ${
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
