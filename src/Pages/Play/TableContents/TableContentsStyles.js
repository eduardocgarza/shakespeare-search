import styled from "styled-components"
import { HashLink as Link } from 'react-router-hash-link'

export const TableContentsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const MainContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const VerseLink = styled(Link)`
  background-color: white;
  border: 1px solid #CCC;
  border-radius: 50%;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  color: black;
  margin: 0 4px;
  padding: 8px;
  height: 30px;
  width: 30px;
  text-decoration: none;

  &:hover {
    background-color: #F9F9F9;
  }
`
