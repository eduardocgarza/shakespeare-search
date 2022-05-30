import React from "react"
import TableContents from "Pages/Play/TableContents/TableContents"
import { FormatTitle, FormatTitleItem } from "Pages/Play/Shared/FormatItemStyles"
import { PoemContent, PoemItemWrapper, PoemVerses, PoemWrapper, VerseLine, VerseWrapper } from "./FormatPoemItemStyles"

export default function FormatPoemItem (props) {
  const { play: playItem } = props
  const { title, tableContents: tC, content } = playItem
  const tableContents = tC.map(v => v.poemNumber)
  
  const poemContent = content.map(poemItem => {
    const { poemNumber, title, content: poemContents } = poemItem
    const poemResults = poemContents.map(versesItem => {
      const { verseNumber, verse } = versesItem
      const verseID = `${poemNumber}-${verseNumber}`
      const versesContent = verse.map(lineItem => {
        const { lineNumber, line } = lineItem
        return <VerseLine key={lineNumber}>{line}</VerseLine>
      })
      return (
        <VerseWrapper key={verseNumber} id={verseID}>
          {versesContent}
        </VerseWrapper>
      )
    })
    return (
      <PoemWrapper key={poemNumber} id={poemNumber}>
        <FormatTitleItem>{title}</FormatTitleItem>
        <PoemVerses>{poemResults}</PoemVerses>
      </PoemWrapper>
    )
  })
  
  return (
    <PoemItemWrapper>
      <FormatTitle>{title}</FormatTitle>
      <TableContents tableContents={tableContents} />
      <PoemContent>{poemContent}</PoemContent>
    </PoemItemWrapper>
  )
}