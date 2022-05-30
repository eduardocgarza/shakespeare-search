import styled from "styled-components"
import { HashLink as Link } from 'react-router-hash-link'

export const ButtonWrapper = styled(Link)`
  background-color: white;
  border: 1px solid #CCC;
  border-radius: 5px;
  bottom: 50px;
  display: block;
  color: black;
  font-size: 14px;
  padding: 10px 20px;
  position: fixed;
  right: 50px;
  text-decoration: none;

  &:hover {
    background-color: #F9F9F9;
  }
`
