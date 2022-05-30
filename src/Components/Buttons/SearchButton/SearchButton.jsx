import React from "react"
import { Button, Icon } from "./SearchButtonStyles"

export default function SearchButton (props) {
  const { alt, icon, onClick } = props
  
  return (
    <Button onClick={onClick}>
      <Icon src={icon} alt={alt} />
    </Button>
  )
}
