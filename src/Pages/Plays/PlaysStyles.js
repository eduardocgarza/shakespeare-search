import { Link } from "react-router-dom"
import styled from "styled-components"

export const PlaysWrapper = styled.div`
  /* background-color: orange; */
  padding: 30px 20px;
  margin: 0 auto;
  max-width: 500px;
`

export const PlaysHeader = styled.h2`
  font-family: 'Kalam', cursive;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
`

export const PlaysMenu = styled.div`
  /* background-color: purple;d */
  padding: 10px;
`

export const PlayLink = styled(Link)`
  background-color: white;
  border: 1px solid #CCC;
  border-radius: 20px;
  display: block;
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #F9F9F9;
  }
`
