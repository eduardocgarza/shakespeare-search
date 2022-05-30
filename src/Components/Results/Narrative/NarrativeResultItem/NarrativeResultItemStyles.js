import { Link } from "react-router-dom"
import styled from "styled-components"

export const NarrativeItemWrapper = styled.div`
  margin-bottom: 20px;
  padding: 30px 20px 0 20px;
`

export const NarrativeResults = styled.div`
  background-color: white;
  border-radius: 5px;
  max-width: 500px;
  padding: 20px;
  margin: 0 auto;
`

export const VerseHeader = styled(Link)`
  border-bottom: 1px solid #CCC;
  color: black;
  display: block;
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #055E9E;
  }
`

export const VerseContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
`

