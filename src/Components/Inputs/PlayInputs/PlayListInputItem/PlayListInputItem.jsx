import React from "react"
import { PlayInputItemWrapper } from "./PlayListInputItemStyles"

export default function PlayListInputItem (props) {
  const { id, title, selected, updateSelected } = props

  function handleSelect() {
		updateSelected(id)
	}
	
  return (
    <PlayInputItemWrapper selected={selected} onClick={handleSelect}>
      {title}
    </PlayInputItemWrapper>
  )
}