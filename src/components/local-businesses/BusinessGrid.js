import React, { useState, useContext } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./BusinessGrid.scss"
import { GlobalDispatchContext } from "../../context/GlobalContextProvider"
import RodalCustom from "../common/RodalCustom"
import GridItem from "./GridItem"
import RodalContent from "./RodalConent"

export default function BusinessGrid() {
  const data = useStaticQuery(graphql`
    query BusinessesQuery {
      bbschema {
        contents(id: "5efd4d8eb1075f4a8e91164f") {
          content
        }
      }
    }
  `).bbschema.contents

  // Global State
  const dispatch = useContext(GlobalDispatchContext)

  const [rodalOpen, setRodalOpen] = useState(false)
  const [selectedBusiness, setSelectedBusiness] = useState(false)

  const toggleRodal = () => {
    dispatch({ type: "TOGGLE_BODY_SCROLL" })
    setRodalOpen(!rodalOpen)
  }

  const handleGridItemClick = itemInfo => {
    setSelectedBusiness(itemInfo)
    toggleRodal()
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

    const getColumnMarkup = (startIndex, endIndex) => {
      let cols = []
      for (let i = startIndex; i < endIndex; i++) {
        cols.push(
          <GridItem
            info={data[i].content}
            handleGridItemClick={handleGridItemClick}
            key={i}
          />
        )
      }

      return (
        <div className="grid-col" key={`col-${startIndex}`}>
          {cols}
        </div>
      )
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

  return (
    <div className="business-grid">
      {getGridColumns()}
      <RodalCustom
        open={rodalOpen}
        toggle={toggleRodal}
        fullScreen={true}
        content={<RodalContent info={selectedBusiness} />}
      />
    </div>
  )
}
