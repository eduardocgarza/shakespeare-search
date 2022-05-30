import styled from "styled-components"

export const Button = styled.button`
  background: ${props => (
    props.selected ? "#F9F9F9" : "white"
  )};
  border: none;
  border: 1px solid #CCC;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  padding: 4px;
  margin-left: 10px;

  &:hover {
    background-color: #F9F9F9;
  }
`

export const Icon = styled.img`
  display: block;
  height: 20px;
  width: auto;
`
