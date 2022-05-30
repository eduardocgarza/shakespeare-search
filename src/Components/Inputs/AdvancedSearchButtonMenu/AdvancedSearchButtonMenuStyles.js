import styled from "styled-components"

export const MenuWrapper = styled.div`
  padding: 0 30px;

  @media (min-width: 576px) {
    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media (min-width: 768px) {
    justify-items: left;
  }
`

export const ItemsSelected = styled.div`
  background-color: #CD4B13;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  margin: 0 auto;
  padding: 10px 20px;
  width: 125px;

  @media (min-width: 576px) {
    margin: 0 10px 0 0;
  }
`