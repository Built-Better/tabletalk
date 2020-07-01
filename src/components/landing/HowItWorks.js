import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider, Parallax } from "react-scroll-parallax"

import "./HowItWorks.scss"
import Button from "../common/Button"
import { createMarkup } from "../../utililties/helper_functions/content_manipulations"
import WifiSVG from "../../images/wifi.svg"
import PeopleSVG from "../../images/people.svg"
import YellowBlock from "../../images/yellow-block.svg"
import YellowBlockFilled from "../../images/yellow-block-filled.svg"
import GreyBlock from "../../images/grey-block.svg"

export default function HowItWorks() {
  const data = useStaticQuery(graphql`
    query HowItWorksQuery {
      bbschema {
        section(key: "how_it_works") {
          content
        }
      }
    }
  `).bbschema.section

  return (
    <ParallaxProvider>
      <div id="how-it-works">
        <div className="container position-relative">
          <Parallax className="yellow-block" y={[-20, 20]}>
            <img src={YellowBlock} alt="Yellow floating block" />
          </Parallax>
          <Parallax className="yellow-block-filled" y={[20, 20]}>
            <img src={YellowBlockFilled} alt="Yellow filled floating block" />
          </Parallax>
          <Parallax className="grey-block" y={[-20, 20]}>
            <img src={GreyBlock} alt="Grey filled floating block" />
          </Parallax>
          <Parallax className="yellow-block-sm" y={[-20, 20]}>
            <img src={YellowBlock} alt="Yellow floating block small" />
          </Parallax>
          <h1>How It Works</h1>
          <p
            className="summary"
            dangerouslySetInnerHTML={createMarkup(data.content.section_summary)}
          ></p>
          <div className="row card-row">
            <div className="col-12 col-lg-6 card-col-first">
              <div className="card">
                <img src={WifiSVG} alt="Online icon" />
                <h2>{data.content.card_1_title}</h2>
                <p
                  dangerouslySetInnerHTML={createMarkup(
                    data.content.card_1_body
                  )}
                ></p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card">
                <img src={PeopleSVG} alt="In person icon" />
                <h2>{data.content.card_2_title}</h2>
                <p
                  dangerouslySetInnerHTML={createMarkup(
                    data.content.card_2_body
                  )}
                ></p>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <Button
              type="primary"
              size="large"
              title="Register Today"
              externalLink="https://www.eventbrite.ca/organizations/events/all"
            />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}
