import React from "react"
import LineItem from "Components/Results/Shared/LineItem/LineItem"
import { ResultTitle } from "Components/Results/Shared/ResultItemStyles"
import { DialogueTitle, PlayDialogue, PlayItemWrapper, PlayResults, PlayTitleItem, PlayVerses, TitleLink } from "./PlayResultItemStyles"

export default function PlayResultItem(props) {
  const { playItem } = props
  const { info, location, content } = playItem
  const { id, title } = info

  const {
    actNumber,
    actName,
    sceneNumber,
    sceneName,
    dialogueNumber,
    verseNumber,
    // lineNumber
  } = location
  const { speakerName, verses } = content

  const playRoute = `/play/${id}`
  const actRoute = `/play/${id}#${actNumber}`
  const sceneRoute = `/play/${id}#${actNumber}-${sceneNumber}`
  const route = `/play/${id}#${actNumber}-${sceneNumber}-${verseNumber}`

	function isMatchLine(verseNumber, lineNumber) {
    return verseNumber === location.verseNumber && lineNumber === location.lineNumber
  }

  const verseResults = verses.map(verseItem => {
    const { verseNumber, verse } = verseItem
    return verse.map(lineItem => {
      const { lineNumber } = lineItem
      const match = isMatchLine(verseNumber, lineNumber)
      return (
        <LineItem 
          key={lineNumber} 
          match={match}
          lineItem={lineItem} 
          location={location} 
          route={route}
        />
      )
    })
  })

	return (
		<PlayItemWrapper>
      <ResultTitle to={playRoute}>{title}</ResultTitle>
      <PlayResults>
        <PlayTitleItem>
          <TitleLink to={actRoute}>{actName}</TitleLink> | <TitleLink to={sceneRoute}>{sceneName}</TitleLink>
        </PlayTitleItem>
        <PlayDialogue>
          {speakerName ? <DialogueTitle>{speakerName}</DialogueTitle> : null}
          <PlayVerses>{verseResults}</PlayVerses>
        </PlayDialogue>
      </PlayResults>
    </PlayItemWrapper>
	)
}