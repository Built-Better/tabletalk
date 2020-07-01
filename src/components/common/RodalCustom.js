import React from "react"
import Rodal from "rodal"
import "rodal/lib/rodal.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import "./RodalCustom.scss"

const customStyles = {
  height: "fit-content",
  maxWidth: "900px",
  width: "auto",
  position: "fixed",
  zIndex: "1000",
  fontFamily: "Oswald, sans-serif",
}

const customMaskStyles = {
  zIndex: "1000",
}

const RodalCustom = ({ content, open, toggle }) => {
  return (
    <Rodal
      visible={open}
      onClose={toggle}
      customStyles={customStyles}
      customMaskStyles={customMaskStyles}
      showCloseButton={false}
    >
      <div className="rodal-content layout">
        <FontAwesomeIcon
          className="close-rodal"
          icon={faTimes}
          onClick={toggle}
        />
        {content}
      </div>
    </Rodal>
  )
}

export default RodalCustom
