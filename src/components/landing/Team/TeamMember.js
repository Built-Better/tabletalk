import React from "react"
import PropTypes from "prop-types"
import { Parallax } from "react-scroll-parallax"

import "./Team.scss"
import { createMarkup } from "../../../utililties/helper_functions/content_manipulations"
import QuoteIcon from "../../../images/quote_icon.svg"

TeamMember.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  writeUp: PropTypes.string,
  quote: PropTypes.string,
  imageSrcs: PropTypes.array,
  positioning: PropTypes.string,
}

export default function TeamMember(props) {
  const text_col_position =
    props.positioning === "left"
      ? "order-1 text-left-aligned"
      : "order-2 text-right-aligned"
  const image_col_position =
    props.positioning === "left"
      ? "order-2"
      : "order-2 order-lg-1 image-col-left"

  return (
    <div className="row team-member">
      <div className={`col-12 col-lg-6 ${text_col_position}`}>
        <h2
          className="header-font font-weight-bold"
          data-aos={props.positioning === "left" ? "fade-right" : "fade-left"}
          data-aos-duration="750"
        >
          {props.position}
        </h2>
        <div
          dangerouslySetInnerHTML={createMarkup(props.writeUp)}
          data-aos={props.positioning === "left" ? "fade-right" : "fade-left"}
          data-aos-duration="750"
          data-aos-delay="250"
        ></div>
        <div className="dotted-border"></div>
        <div className="quote-box" data-aos="flip-up">
          <img src={QuoteIcon} alt="quotation icon" />
          <span
            className="quote"
            dangerouslySetInnerHTML={createMarkup(props.quote)}
          ></span>
          <span className="quote-source">
            <p className="font-weight-bold">{props.name}</p>
            <p>{props.position}</p>
          </span>
        </div>
      </div>
      <div className={`col-12 col-lg-6 image-col ${image_col_position}`}>
        <Parallax className="image-middle" y={[-20, -20]}>
          <img src={props.imageSrcs[0]} alt="First team member." />
        </Parallax>
        <Parallax className="image-top" y={[-20, 20]}>
          <img src={props.imageSrcs[1]} alt="Second team member." />
        </Parallax>
        <Parallax className="image-bottom" y={[-20, 20]}>
          <img src={props.imageSrcs[2]} alt="Third team member." />
        </Parallax>
      </div>
    </div>
  )
}
