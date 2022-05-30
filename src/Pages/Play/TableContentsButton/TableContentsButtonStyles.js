import styled from "styled-components"

export const HeaderButtonItem = styled.button`
  background: none;
  background-color: ${props => (
    props.disabled ? "#F9F9F9" : "white"
  )};
  border: none;
  border: 1px solid #CCC;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 0 4px;
  padding: 6px;
  text-decoration: none;

  &:hover {
    background-color: #F9F9F9;
  }
`

export const HeaderButtonIcon = styled.img`
  display: block;
  height: 15px;
  width: 15px;
`
