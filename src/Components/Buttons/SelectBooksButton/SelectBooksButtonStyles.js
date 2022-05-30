import styled from "styled-components"

export const BooksButton = styled.button`
  background: none;
  background-color: #333;
  border: none;
  border-radius: 20px;
  display: block;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  width: 125px;

  &:hover {
    background-color: #393939;
  }

  &:disabled {
    background-color: #BBB;
  }

  @media (min-width: 576px) {
    margin: 0 10px 0 0;
  }
`