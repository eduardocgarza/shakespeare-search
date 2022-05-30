import styled from "styled-components"
import { Link } from "react-router-dom"

export const ResultTitle = styled(Link)`
  display: block;
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #055E9E;
  }
`

export const ResultTitleItem = styled(Link)`
  display: block;
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #055E9E;
  }
`
