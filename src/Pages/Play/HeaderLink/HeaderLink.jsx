import React from "react"
import { HeaderLinkIcon, HeaderLinkItem } from "./HeaderLinkStyles"

export default function HeaderLink (props) {
  const { route, icon, alt, disabled } = props
  const setDisabled = (disabled === "undefined") ? false : disabled
  return (  
    <HeaderLinkItem to={route} disabled={setDisabled}>
      <HeaderLinkIcon src={icon} alt={alt} />
    </HeaderLinkItem>
  )
}