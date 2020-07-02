import React from "react"

import "./BusinessGrid.scss"
import Button from "../common/Button"

export default function GridItem(props) {
  return (
    <div
      className="grid-item"
      onClick={() => props.handleGridItemClick(props.info)}
    >
      <div className="item-card">
        <h1 className="business-name">{props.info.name}</h1>
        <h3 className="business-type">{props.info.business_type}</h3>
        <Button
          type="primary"
          title="More Info"
          size="large"
          handleClick={props.handleGridItemClick}
        />
      </div>
    </div>
  )
}
