import React from "react"
import HeaderLink from "../HeaderLink/HeaderLink"
import arrowLeftIcon from "../../../Assets/icons/icon-arrow-left.png"
import homeIcon from "../../../Assets/icons/icon-home.png"
import arrowRightIcon from "../../../Assets/icons/icon-arrow-right.png"
import { HeaderNavigation } from "./PlayHeaderNavigationStyles"

export default function PlayHeaderNavigation(props) {
  const { id } = props
	const currentIsFirst = id === 1000
	const currentIsLast = id === 1043
	const previousRoute = `/play/${id-1}`
	const nextRoute = `/play/${id+1}`
  
  return (
    <HeaderNavigation>
      <HeaderLink 
        route={previousRoute} 
        icon={arrowLeftIcon} 
        alt="Link to previous play" 
        disabled={currentIsFirst}
      />
      <HeaderLink 
        route="/plays"
        icon={homeIcon}
        alt="Link to all plays"
      />
      <HeaderLink 
        route={nextRoute}
        icon={arrowRightIcon}
        alt="Link to next play"
        disabled={currentIsLast}
      />
    </HeaderNavigation>
  )
}