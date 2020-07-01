import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ParallaxProvider } from "react-scroll-parallax"

import "./Team.scss"
import TeamMember from "./TeamMember"

export default function Team() {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      bbschema {
        contents(content_type: "team_member") {
          content
        }
      }
    }
  `).bbschema.contents

  console.log(data)

  const team_members = data.map((member, index) => {
    const image_srcs = member.content.images.list_items.map(image => {
      return image.url
    })

    let positioning = index % 2 === 0 ? "left" : "right"

    return (
      <TeamMember
        name={member.content.name}
        position={member.content.position}
        quote={member.content.quote}
        writeUp={member.content.write_up}
        imageSrcs={image_srcs}
        positioning={positioning}
        key={member.content.name}
        index={index}
      />
    )
  })

  return (
    <div id="team" className="container">
      <h1>The Faces Behind Table Talk</h1>
      <ParallaxProvider>{team_members}</ParallaxProvider>
    </div>
  )
}
