import React from "react"
import { ResultTitle } from "Components/Results/Shared/ResultItemStyles"
import LineItem from "../../Shared/LineItem/LineItem"
import { NarrativeItemWrapper, NarrativeResults, VerseContent, VerseHeader } from "./NarrativeResultItemStyles"

export default function NarrativeResultItem(props) {
	const { narrativeItem } = props
	const { info, location, content } = narrativeItem
	const { id, title } = info
	const { verseNumber, verse } = content

	const playRoute = `/play/${id}`
	const verseRoute = `/play/${id}#${verseNumber}`

	function isMatchLine(verseNumber, lineNumber) {
    return location.verseNumber === verseNumber && location.lineNumber === lineNumber
  }

	const verseLines = verse.map(lineItem => {
		const { lineNumber } = lineItem
		const match = isMatchLine(verseNumber, lineNumber)
		return (
			<LineItem 
				key={lineNumber}
				match={match}
				lineItem={lineItem} 
				location={location} 
				route={verseRoute}
			/>
		)
	})
	
	return (
		<NarrativeItemWrapper>
			<ResultTitle to={playRoute}>{title}</ResultTitle>
			<NarrativeResults>
				<VerseHeader to={verseRoute}>Verse {verseNumber}</VerseHeader>
				<VerseContent>{verseLines}</VerseContent>
			</NarrativeResults>
		</NarrativeItemWrapper>
	)
}