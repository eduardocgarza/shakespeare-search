import React from "react"
import { Line, LineHighlight } from "./LineItemStyles"
import { getHighlightSubstrings } from "../../helpers/generateComponents/generateComponents"

export default function LineItem(props) {
	const { lineItem, location, match, route } = props
	const { line } = lineItem
	const { startIndex, endIndex } = location

	if(!match) {
		return <Line>{line}</Line>
	}
	const {textFront, textHighlight, textBack} = getHighlightSubstrings(line, startIndex, endIndex)

	return (
		<Line>
			{textFront}<LineHighlight to={route}>{textHighlight}</LineHighlight>{textBack}
		</Line>
	)
}