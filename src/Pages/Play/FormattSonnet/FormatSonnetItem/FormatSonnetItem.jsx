import React from "react"
import TableContents from "Pages/Play/TableContents/TableContents"
import { FormatTitleItem } from "Pages/Play/Shared/FormatItemStyles"
import { SonnetContent, SonnetItemWrapper, SonnetTitle, SonnetVerses, SonnetVerseWrapper, VerseLine } from "./FormatSonnetItemStyles"

export default function FormatSonnetItem (props) {
  const { play: playItem } = props
  const { title, content } = playItem
  const tableContents = content.map(v => v.sonnetNumber)

  const sonnetContent = content.map(sonnetItem => {
    const { sonnetNumber, content: sonnet } = sonnetItem
    const sonnetResults = sonnet.map(lineItem => {
      const { lineNumber, line } = lineItem
      return (
        <VerseLine key={lineNumber}>{line}</VerseLine>
      )
    })
    return (
      <SonnetVerseWrapper key={sonnetNumber} id={sonnetNumber}>
        <FormatTitleItem>Sonnet {sonnetNumber}</FormatTitleItem>
        <SonnetVerses>{sonnetResults}</SonnetVerses>
      </SonnetVerseWrapper>
    )
  })
  
  return (
    <SonnetItemWrapper>
      <SonnetTitle>{title}</SonnetTitle>
      <TableContents tableContents={tableContents} />
      <SonnetContent>{sonnetContent}</SonnetContent>
    </SonnetItemWrapper>
  )
}