import React from "react"
import PropTypes from "prop-types"

import "./Button.scss"

const Button = props => {
  if (props.handleClick) {
    return (
      <button
        className={`button-${props.type} button-${props.size} button-global`}
        onClick={props.handleClick}
      >
        {props.title}
      </button>
    )
  } else {
    return (
      <a
        href={props.externalLink ? props.externalLink : "#"}
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={`button-${props.type} button-${props.size} button-global`}
        >
          {props.title}
        </button>
      </a>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
  externalLink: PropTypes.string,
}

Button.defaultProps = {
  size: `small`,
}

export default Button
