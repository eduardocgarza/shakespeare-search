import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderLinkItem = styled(Link)`
  background-color: ${props => (
    props.disabled ? "#F9F9F9" : "white"
  )};
  border: 1px solid #CCC;
  border-radius: 50%;
  display: block;
  margin: 0 6px;
  padding: 8px;
  pointer-events: ${props => (
    props.disabled ? "none" : "auto"
  )};
  text-decoration: none;

  &:hover {
    background-color: #F9F9F9;
  }
`

export const HeaderLinkIcon = styled.img`
  display: block;
  height: 20px;
  width: 20px;
`
