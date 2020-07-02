import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./BusinessGrid.scss"
import RodalCustom from "../common/RodalCustom"
import GridItem from "./GridItem"

export default function BusinessGrid() {
  const data = useStaticQuery(graphql`
    query BusinessesQuery {
      bbschema {
        contents(content_type: "local_business") {
          content
        }
      }
    }
  `).bbschema.contents

  console.log(data)

  const [rodalOpen, setRodalOpen] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(false)

  const toggleRodal = () => {
    setRodalOpen(!rodalOpen)
  }

  const handleGridItemClick = itemInfo => {
    console.log(itemInfo)
    setSelectedBusiness(itemInfo)
    // toggleRodal()
  }

  const getGridColumns = () => {
    const remainder = data.length % 3
    let col_1_count, col_2_count, col_3_count

    switch (remainder) {
      case 1:
        col_1_count = Math.floor(data.length / 3) + 1
        col_2_count = Math.floor(data.length / 3)
        col_3_count = Math.floor(data.length / 3)
        break
      case 2:
        col_1_count = Math.floor(data.length / 3) + 1
        col_2_count = Math.floor(data.length / 3) + 1
        col_3_count = Math.floor(data.length / 3)
        break
      default:
        col_1_count = Math.floor(data.length / 3)
        col_2_count = Math.floor(data.length / 3)
        col_3_count = Math.floor(data.length / 3)
        break
    }

    console.log(col_1_count, col_2_count, col_3_count)

    const getColumnMarkup = (startIndex, endIndex) => {
      let cols = []
      for (let i = startIndex; i < endIndex; i++) {
        cols.push(
          <GridItem
            info={data[i].content}
            handleGridItemClick={handleGridItemClick}
            key={data[i].content.name}
          />
        )
      }

      return <div className="grid-col">{cols}</div>
    }

    let column_markup = []

    column_markup.push(getColumnMarkup(0, col_1_count))
    column_markup.push(getColumnMarkup(col_1_count, col_1_count + col_2_count))
    column_markup.push(
      getColumnMarkup(
        col_1_count + col_2_count,
        col_1_count + col_2_count + col_3_count
      )
    )

    return column_markup
  }

  const grid_items = data.map(item => {
    return (
      <GridItem
        info={item.content}
        handleGridItemClick={handleGridItemClick}
        key={item.content.name}
      />
    )
  })

  return (
    <div className="business-grid">
      {getGridColumns()}
      <RodalCustom open={rodalOpen} toggle={toggleRodal} content={"hi"} />
    </div>
  )
}
