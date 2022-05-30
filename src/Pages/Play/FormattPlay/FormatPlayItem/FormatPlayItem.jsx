import React from "react"
import { FormatTitle } from "Pages/Play/Shared/FormatItemStyles"
import PlayTableContents from "../PlayTableContents/PlayTableContents"
import { PlayActContent, PlayActTitle, PlayContent, PlayItemWrapper, PlayWrapper, SceneItemContent, SceneItemTitle, SceneItemWrapper, SpeakerTitle, VerseLineItem, VersesContent, VersesWrapper, VerseWrapper } from "./FormatPlayItemStyles"

export default function FormatPlayItem(props) {
  const { play } = props
  const { title, tableContents, content } = play

  const playContent = content.map(actItem => {
    const { actNumber, actName, scenes } = actItem
    const scenesContent = scenes.map(sceneItem => {
      const { sceneNumber, sceneName, dialogue } = sceneItem
      const dialogueContent = dialogue.map(dialogueItem => {
        const { verseNumber, type, verses } = dialogueItem
        const versesContent = verses.map(verseItem => {
          const { verseNumber, verse } = verseItem
          const verseID = `${actNumber}-${sceneNumber}-${verseNumber}`

          const verseContent = verse.map(lineItem => {
            const { lineNumber, line } = lineItem
            return <VerseLineItem key={lineNumber}>{line}</VerseLineItem>
          })
          return (
            <VerseWrapper key={verseNumber} id={verseID}>{verseContent}</VerseWrapper>
          )
        })

        if (type === "Speaker") {
          const { speakerName } = dialogueItem
          return (
            <VersesWrapper key={verseNumber}>
              <SpeakerTitle>{speakerName}</SpeakerTitle>
              <VersesContent>{versesContent}</VersesContent>
            </VersesWrapper>
          ) 
        }
        
        return (
          <VersesWrapper key={verseNumber}>{versesContent}</VersesWrapper>
        )
      })
      const sceneID = `${actNumber}-${sceneNumber}`
      return (
        <SceneItemWrapper key={sceneNumber} id={sceneID}>
          <SceneItemTitle>{sceneName}</SceneItemTitle>
          <SceneItemContent>{dialogueContent}</SceneItemContent>
        </SceneItemWrapper>
      )
    })
    const actID = `${actNumber}`
    return (
      <PlayItemWrapper key={actNumber} id={actID}>
        <PlayActTitle>Act {actName}</PlayActTitle>
        <PlayActContent>{scenesContent}</PlayActContent>
      </PlayItemWrapper>
    )
  })
  
  return (
    <PlayWrapper>
			<FormatTitle>{title}</FormatTitle>
      <PlayTableContents tableContents={tableContents} />
      <PlayContent>{playContent}</PlayContent>
		</PlayWrapper>
  )
}