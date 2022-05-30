import { Link } from "react-router-dom"
import styled from "styled-components"

export const PlayItemWrapper = styled.div`
  margin-bottom: 20px;
  padding: 30px 20px 0 20px;
`

export const PlayResults = styled.div``

export const PlayTitleItem = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`

export const PlayDialogue = styled.div`
  margin-bottom: 30px;
`

export const DialogueTitle = styled.h4`
  font-size: 15px;
  margin-bottom: 8px;
  text-align: center;
`

export const PlayVerses = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleLink = styled(Link)`
  color: black;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: #055E9E;
  }
`
