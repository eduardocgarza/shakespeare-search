import React from "react"
import useAppContext from "../../../../State/AppContext"
import PlayInputItem from "../PlayGridInputItem/PlayGridInputItem"
import { GridViewWrapper } from "./PlaysGridViewInputStyles"

export default function PlaysGridViewInput () {
  const { plays, selectPlay } = useAppContext()

	const playsComponent = plays.map(playItem => {
    const { id, title, iconFile, selected } = playItem
    const fullPath = require(`../../../../Assets/images/plays/${iconFile}`)

    return (
      <PlayInputItem 
        id={id}
        key={id} 
        title={title} 
        fullPath={fullPath} 
        selected={selected}
        updateSelected={selectPlay}
      />
    )
  })

	return (
    <GridViewWrapper>{playsComponent}</GridViewWrapper>
  )
}