import styled from "styled-components"

export const SearchInputContainer = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;

  @media (min-width: 576px) {
    flex: none;
  }
`

export const SearchInputItem = styled.input`
  border: none;
  border: 1px solid #C4C4C4;
  border-radius: 20px;
  display: block;
  font-size: 14px;
  padding: 12px 16px;
  flex: 1;

  &:hover {
    background-color: #FDFDFD;
    cursor: pointer;
  }
  
  &:focus{ 
    outline: none;
  }

  @media (min-width: 576px) {
    min-width: 450px;
    flex: none;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) { }
  @media (min-width: 1200px) { }
  @media (min-width: 1400px) { }
  
`

