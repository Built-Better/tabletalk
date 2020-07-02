import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons"

import { createMarkup } from "../../utililties/helper_functions/content_manipulations"
import Button from "../common/Button"

export default function RodalContent(props) {
  const getMediaDisplay = () => {
    if (props.info.logo && props.info.logo.url) {
      return <img src={props.info.logo.url} alt="Business logo" />
    } else if (props.info.image && props.info.image.url) {
      return <img src={props.info.image.url} alt="Business preview" />
    } else {
      return "" // No Media :(
    }
  }

  const getSocialLinks = () => {
    let links = []
    if (props.info.ig_url)
      links.push(
        <a
          href={props.info.ig_url}
          key={props.info.ig_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      )
    if (props.info.facebook_url)
      links.push(
        <a
          href={props.info.facebook_url}
          key={props.info.facebook_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      )
    if (props.info.twitter_url)
      links.push(
        <a
          href={props.info.twitter_url}
          key={props.info.twitter_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      )
    if (props.info.linkedin_url)
      links.push(
        <a
          href={props.info.linkedin_url}
          key={props.info.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      )

    return links
  }

  return (
    <div className="business-rodal-content container">
      {getMediaDisplay()}
      <h1>{props.info.name}</h1>
      <p className="type">{props.info.business_type}</p>
      <div
        dangerouslySetInnerHTML={createMarkup(props.info.summary)}
        className="body"
      ></div>
      <div className="social">{getSocialLinks()}</div>
      {props.info.website_url ? (
        <Button
          type="alt"
          title="Visit the site"
          size="large"
          externalLink={props.info.website_url}
        />
      ) : (
        ""
      )}
    </div>
  )
}
