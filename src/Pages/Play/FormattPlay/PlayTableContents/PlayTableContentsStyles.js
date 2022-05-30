import styled from "styled-components"
import { HashLink as Link } from 'react-router-hash-link'

export const TableContentsContainer = styled.div``

export const ActsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`

export const ScenesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ActButton = styled.button`
  align-items: center;
  background: none;
  background-color: ${props => (
    // props.selected ? "#F9F9F9" : "white"
    props.selected ? "#724CF9" : "white"
  )};
  border: none;
  border: 1px solid ${props => props.selected ? "#724CF9": "#CCC" };
  border-radius: 50%;
  cursor: pointer;
  color: ${props => (
    props.selected ? "white" : "black"
  )};
  display: flex;
  font-size: 14px;
  height: 30px;
  justify-content: center;
  margin: 0 4px;
  padding: 8px;
  width: 30px;
  text-decoration: none;

  &:hover {
    background-color: #724CF9;
    color: white;
  }
`

export const SceneItem = styled(Link)`
  display: block;
  color: black;
  font-size: 14px;
  margin-bottom: 4px;
  padding: 8px;
  text-decoration: none;

  &:hover {
    color: #724CF9;
  }
`
