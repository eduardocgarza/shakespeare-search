import styled from "styled-components"
import { Link } from "react-router-dom"

export const Line = styled.p`
  font-size: 13px;
  line-height: 24px;
`

export const LineHighlight = styled(Link)`
  background-color: #F8E16C;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  padding: 2px 8px;
  text-decoration: none;

  &:hover {
    background-color: #F9E78B;
  }
`
