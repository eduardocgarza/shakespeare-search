import styled from "styled-components"

export const Button = styled.button`
  align-items: center;
  background-color: white;
  border: 1px solid #CCC;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  margin-left: 6px;
  width: 40px;

  &:hover {
    background-color: #F9F9F9;
  }
`

export const Icon = styled.img`
  display: block;
  height: 20px;
  width: auto;
`
