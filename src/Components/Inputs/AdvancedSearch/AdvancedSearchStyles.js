import styled from "styled-components"

export const AdvancedSearchWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const SearchHeader = styled.div`
  border-bottom: 1px solid #CCC;
  margin-bottom: 10px;
  padding: 10px 0;
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
    padding: 0;
  }
`

export const ExpandedHeader = styled.div`
  padding: 20px 10px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 30px;
    text-align: left;
  }
`

export const HeaderMain = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 8px;
`

export const HeaderDescription = styled.div`
  font-size: 14px;
`

export const PlaysContainer = styled.div``

export const PlaysHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`

export const SearchInputContainer = styled.div`

`