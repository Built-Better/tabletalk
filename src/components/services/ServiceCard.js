import React from "react"

import "./ServiceCard.scss"
import { createMarkup } from "../../utililties/helper_functions/content_manipulations"

export default function ServiceCard(props) {
  let image_col_classes = "col-12 col-md-6 text-center icon",
    body_col_classes = "col-12 col-md-6"
  if (props.leftAligned) {
    image_col_classes += " order-2 order-md-1"
    body_col_classes += " order-1 order-md-2"
  }

  return (
    <div className="service-card" data-aos="fade-up" data-aos-duration="750">
      <div className="card-top">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.imgSrc})` }}
        ></div>
        <div className="overlay"></div>
        <div className="card-title">
          <h1>{props.title}</h1>
          <div className="dotted-border"></div>
        </div>
      </div>
      <div className="card-bottom">
        <div className="row">
          <div className={body_col_classes}>
            <span dangerouslySetInnerHTML={createMarkup(props.body)}></span>
          </div>
          <div className={image_col_classes}>
            <img src={props.icon} alt={`${props.title} icon`} />
          </div>
        </div>
      </div>
    </div>
  )
}
