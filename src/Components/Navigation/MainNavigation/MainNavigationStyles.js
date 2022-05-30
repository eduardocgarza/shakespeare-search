import { Link } from "react-router-dom"
import styled from "styled-components"

export const NavigationWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
  z-index: 10;

  @media (min-width: 576px) {
    justify-content: flex-start;
    left: 25px;
    margin-bottom: 0;
    position: fixed;
    top: 25px;
  }
`

export const NavLink = styled(Link)`
  color: black;
  display: block;
  font-size: 14px;
  margin-right: 4px;
  padding: 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`