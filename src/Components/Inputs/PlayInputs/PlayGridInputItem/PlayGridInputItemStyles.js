import styled from "styled-components"

export const PlayInputItemWrapper = styled.button`
  background: none;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #CCC;
  border: none;
  height: 125px;
  margin: 6px;
  position: relative;
  width: 95px;

  &:hover {
    cursor: pointer;
  }
`

export const PlayItemImage = styled.img`
  display: block;
  overflow: hidden;
  height: 125px;
  opacity: ${props => props.selected ? 1.0 : 0.5};
  width: auto;
`

export const PlayItemTitle = styled.div`
  background-color: black;
  border-radius: 10px;
  color: white;
  left: 0;
  min-width: 150px;
  padding: 10px;
  position: absolute;
  top: -50px;
`
