import React from "react"
import { NarrativeVerse, VerseContent, VerseHeader, VerseLineItem } from "./NarrativeItemVersesStyles"

export default function NarrativeItemVerses(props) {
  const { content } = props

  const verses = content.map(verseItem => {
    const { verseNumber, verse } = verseItem
    const verseID = `${verseNumber}`
    const verseContent = verse.map(lineItem => {
      const { lineNumber, line } = lineItem
      return <VerseLineItem key={lineNumber}>{line}</VerseLineItem>
    })
    return (
      <NarrativeVerse key={verseNumber} id={verseID}>
        <VerseHeader>Verse {verseNumber}</VerseHeader>
        <VerseContent>{verseContent}</VerseContent>
      </NarrativeVerse>
    )
  })
  
  return <>{verses}</>
}