import styled from "styled-components"

export const PlayInputItemWrapper = styled.button`
  background: none;
  background-color: ${props => (
    props.selected ? "#F4F4F4" : "white"
  )};
  border: none;
  border-radius: 5px;
  display: block;
  padding: 12px 16px;
  margin-bottom: 4px;
  width: 100%;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: #F9F9F9;
  }
`
