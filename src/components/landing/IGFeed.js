import React, { useState, useEffect } from "react"
import axios from "axios"

import "./IGFeed.scss"
import Button from "../common/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons"

export default function IGFeed() {
  const [images, setImages] = useState([])
  const [windowWidth, setWindowWidth] = useState(undefined)
  const userID = "13200542343"

  useEffect(() => {
    axios
      .get(
        `https://www.instagram.com/graphql/query/?query_hash=eddbde960fed6bde675388aac39a3657&variables={"id": "${userID}", "first": 12}`
      )
      .then(res => {
        const images = res.data.data.user.edge_owner_to_timeline_media.edges.map(
          (edge, index) => {
            return {
              type: edge.node.__typename,
              video_url: edge.node.video_url,
              image_url: edge.node.thumbnail_resources[4].src,
              likes: edge.node.edge_media_preview_like.count,
              comments: edge.node.edge_media_to_comment.count,
            }
          }
        )
        setImages(images)
      })
  }, [])

  useEffect(() => {
    const isClient = typeof window === "object"
    if (!isClient) {
      return false
    }

    setWindowWidth(window.innerWidth)

    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const imageFeed = () => {
    const length = getGridItemWidth()

    const columnStyles = {
      width: `${length}px`,
      height: `${length}px`,
    }

    return images.map((image, index) => {
      if (image.type === "GraphVideo") {
        return (
          <div className="column" key={image.video_url} style={columnStyles}>
            <div className="overlay">
              <span>
                <FontAwesomeIcon icon={faHeart} />
                {image.likes}
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
                {image.comments}
              </span>
            </div>
            <video autoPlay loop muted playsInline>
              <source src={image.video_url} />
            </video>
          </div>
        )
      } else {
        return (
          <div className="column" key={image.image_url} style={columnStyles}>
            <div className="overlay">
              <span>
                <FontAwesomeIcon icon={faHeart} />
                {image.likes}
              </span>
              <span>
                <FontAwesomeIcon icon={faComment} />
                {image.comments}
              </span>
            </div>
            <img src={image.image_url} alt={"instagram feed media " + index} />
          </div>
        )
      }
    })
  }

  const getGridItemWidth = () => {
    if (windowWidth <= 576) {
      return (windowWidth - 30) / 3
    } else if (windowWidth > 576 && windowWidth < 768) {
      return (Math.min(windowWidth, 540) - 30) / 3
    } else if (windowWidth >= 768 && windowWidth < 992) {
      return (Math.min(windowWidth, 720) - 30) / 3
    } else if (windowWidth > 992 && windowWidth <= 1200) {
      return (Math.min(windowWidth, 960) - 30) / 3
    } else {
      return (1140 - 30) / 3
    }
  }

  return (
    <div id="igFeed" className="container">
      <h1 className="mb-5">Table Talk On Instagram</h1>
      <div className="ig-grid">{imageFeed()}</div>
      <div className="text-center mt-5">
        <Button
          type="primary"
          size="large"
          title="Follow Us"
          externalLink="https://builtbetter.tech/"
        />
      </div>
    </div>
  )
}
