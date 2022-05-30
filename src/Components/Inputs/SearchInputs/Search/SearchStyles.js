import styled from "styled-components"

export const SearchWrapper = styled.section`
  padding: 20px 0;
`

export const SearchContainer = styled.div`
  
  @media (min-width: 576px) {
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

export const SelectedItems = styled.div`
  align-items: center;
  background-color: #CD4B13;
  border-radius: 50%;
  color: white;
  display: flex;
  font-size: 14px;
  justify-content: center;
  height: 40px;
  margin-left: 6px;
  visibility: ${props => (
    props.advancedSearchOn ? "hidden" : "visible"
  )};
  width: 40px;
`

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 20px 0;

  @media (min-width: 768px) {
    
  }
`
