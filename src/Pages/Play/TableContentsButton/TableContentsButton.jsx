import React from "react"
import { HeaderButtonIcon, HeaderButtonItem } from "./TableContentsButtonStyles"

export default function NarrativeTableContentsButton (props) {
  const { onClick, icon, alt, disabled } = props
  return (
    <HeaderButtonItem onClick={onClick} disabled={disabled}>
      <HeaderButtonIcon src={icon} alt={alt} />
    </HeaderButtonItem>
  )
}