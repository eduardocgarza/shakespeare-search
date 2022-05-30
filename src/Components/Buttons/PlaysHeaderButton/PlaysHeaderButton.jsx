import React from "react"
import { Button, Icon } from "./PlaysHeaderButtonStyles"

export default function PlaysHeaderButton(props) {
  const { alt, icon, onClick, selected } = props
  
  return (
    <Button onClick={onClick} selected={selected}>
      <Icon src={icon} alt={alt} />
    </Button>
  )
}