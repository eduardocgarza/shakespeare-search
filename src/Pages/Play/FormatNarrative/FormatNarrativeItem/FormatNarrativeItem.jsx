import { FormatTitle } from "Pages/Play/Shared/FormatItemStyles"
import React from "react"
import TableContents from "../../TableContents/TableContents"
import NarrativeItemVerses from "../NarrativeItemVerses/NarrativeItemVerses"
import { NarrativeContent, NarrativeItemWrapper } from "./FormatNarrativeItemStyles"

export default function FormatNarrativeItem(props) {
  const { play: playItem } = props
  const { title, content } = playItem
  const tableContents = content.map(v => v.verseNumber)

  return (
    <NarrativeItemWrapper>
      <FormatTitle>{title}</FormatTitle>
      <TableContents tableContents={tableContents} />
      <NarrativeContent>
        <NarrativeItemVerses content={content} />
      </NarrativeContent>
    </NarrativeItemWrapper>
  )
}