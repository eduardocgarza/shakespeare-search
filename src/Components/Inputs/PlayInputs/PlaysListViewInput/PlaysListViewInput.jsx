import React from "react"
import useAppContext from "State/AppContext"
import PlayListInputItem from "../PlayListInputItem/PlayListInputItem"
import { ListViewWrapper } from "./PlaysListViewInputStyles"

export default function PlaysListViewInput() {
  const { plays, selectPlay } = useAppContext()
  const playsComponent = plays.map(playItem => {
    const { id, title, selected } = playItem

    return (
      <PlayListInputItem 
        id={id}
        key={id}
        title={title}
        selected={selected}
        updateSelected={selectPlay}
      />
    )
  })
  
  return <ListViewWrapper>{playsComponent}</ListViewWrapper>
}