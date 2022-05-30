import styled from "styled-components"
import { HashLink as Link } from 'react-router-hash-link'

// Results
export const ResultsWrapper = styled.div`
  padding: 30px 0;
`

export const ResultsHeading = styled.h3`
  background: none;
  border: none;
  border-radius: 50px;
  display: block;
  font-size: 26px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 24px;
  text-align: center;
`

export const ResultsHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ResultsContent = styled.div``
export const ResultsContainer = styled.div``

export const HeaderLink = styled(Link)`
  background: none;
  background-color: #F9F9F9;
  border: none;
  border-radius: 20px;
  color: black;
  cursor: pointer;
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
  margin-left: 4px;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    background-color: #F4F4F4;
  }
`
