import React from "react"
import LineItem from "Components/Results/Shared/LineItem/LineItem"
import { SonnetItemWrapper, SonnetResults, SonnetVerses } from "./SonnetResultItemStyles"
import { ResultTitle, ResultTitleItem } from "Components/Results/Shared/ResultItemStyles"

export default function SonnetResultItem(props) {
	const { sonnetItem } = props
	const { info, location, content } = sonnetItem
	const { id, title } = info
	const { sonnetNumber, content: sonnetContent } = content

	const sonnetRoute = `/play/${id}`
	const sonnetTitleRoute = `/play/${id}#${sonnetNumber}`
	
	function isMatchLive (lineNumber) {
		return lineNumber === location.lineNumber
	}

	const verseLines = sonnetContent.map(lineItem => {
		const { lineNumber } = lineItem
		const match = isMatchLive(lineNumber)
		return (
			<LineItem 
				key={lineNumber}
				match={match}
				lineItem={lineItem} 
				location={location}
				route={sonnetTitleRoute}
			/>
		)
	})

	return (
		<SonnetItemWrapper>
			<ResultTitle to={sonnetRoute}>{title}</ResultTitle>
			<SonnetResults>
				<ResultTitleItem to={sonnetTitleRoute}>Sonnet {sonnetNumber}</ResultTitleItem>
				<SonnetVerses>{verseLines}</SonnetVerses>
			</SonnetResults>
		</SonnetItemWrapper>
	)
}