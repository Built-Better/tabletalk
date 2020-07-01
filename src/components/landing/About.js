import React from "react"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"

import "./About.scss"
import { createMarkup } from "../../utililties/helper_functions/content_manipulations"
import ChatSVG from "../../images/chat.svg"
import GlobeSVG from "../../images/globe.svg"
import YellowBlock from "../../images/yellow-block.svg"
import YellowBlockFilled from "../../images/yellow-block-filled.svg"
import GreyBlock from "../../images/grey-block.svg"

export default function About() {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      bbschema {
        section(key: "about_table_talk") {
          content
        }
      }
    }
  `).bbschema.section

  console.log(data)

  return (
    <ParallaxProvider>
      <div id="about" className="container position-relative">
        <h1>About Table Talk</h1>
        <div className="row">
          <div className="col-12 col-md-8 text-col">
            <h2 className="header-font">{data.content.header_1}</h2>
            <p
              dangerouslySetInnerHTML={createMarkup(data.content.body_text_1)}
            ></p>
          </div>
          <div className="col-12 col-md-4 icon-col">
            <img src={ChatSVG} alt="chat icon" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 icon-col order-2 order-md-1">
            <img src={GlobeSVG} alt="globe icon" />
          </div>
          <div className="col-12 col-md-8 text-col order-1 order-md-2">
            <h2 className="header-font">{data.content.header_2}</h2>
            <p
              dangerouslySetInnerHTML={createMarkup(data.content.body_text_2)}
            ></p>
          </div>
        </div>
        <Parallax className="yellow-block" y={[-20, 20]}>
          <img src={YellowBlock} alt="Yellow floating block" />
        </Parallax>
        <Parallax className="yellow-block-filled" y={[20, 20]}>
          <img src={YellowBlockFilled} alt="Yellow filled floating block" />
        </Parallax>
        <Parallax className="grey-block" y={[-20, 20]}>
          <img src={GreyBlock} alt="Grey filled floating block" />
        </Parallax>
        <Parallax className="yellow-block-sm" y={[20, 20]}>
          <img src={YellowBlock} alt="Yellow floating block small" />
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}
