import React from "react"
import LineItem from "Components/Results/Shared/LineItem/LineItem"
import { VerseContent, VerseHeader } from "Components/Results/Narrative/NarrativeResultItem/NarrativeResultItemStyles"
import { PoemItemWrapper, PoemResults, PoemTitle, PoemTitleItem } from "./PoemResultItemStyles"
import { ResultTitle, ResultTitleItem } from "Components/Results/Shared/ResultItemStyles"

export default function PoemResultItem(props) {
	const { poemItem } = props
	const { info, location, content } = poemItem
	const { id, title } = info
	const { poemNumber, title: poemTitle, content: poemContent } = content
	const singlePoemItem = poemContent[0]
	const { verseNumber, verse } = singlePoemItem

	const poemRoute = `/play/${id}`
	const poemTitleRoute = `/play/${id}#${poemNumber}`
	const poemVerseRoute = `/play/${id}#${poemNumber}-${verseNumber}`

	function isMatchLive(lineNumber) {
		return lineNumber === location.lineNumber
	}
	
	const verseLines = verse.map(lineItem => {
		const { lineNumber } = lineItem
		const match = isMatchLive(lineNumber)
		return (
			<LineItem 
				key={lineNumber}
				match={match}
				lineItem={lineItem} 
				location={location} 
				route={poemVerseRoute}
			/>
		)
	})
	
	return (
		<PoemItemWrapper>
			<ResultTitle to={poemRoute}>{title}</ResultTitle>
			<PoemResults>
				<ResultTitleItem to={poemTitleRoute}>Poem {poemTitle}</ResultTitleItem>
				<VerseContent>
					<VerseHeader to={poemVerseRoute}>Verse {verseNumber}</VerseHeader>
					<VerseContent>{verseLines}</VerseContent>
				</VerseContent>
			</PoemResults>
		</PoemItemWrapper>
	)
}