import React from "react"
import { NavigationWrapper, NavLink } from "./MainNavigationStyles"

export default function MainNavigation() {
  return (
    <NavigationWrapper>
      <NavLink to="/">Search</NavLink>
      <NavLink to="/plays">Plays</NavLink>
    </NavigationWrapper>
  )
}