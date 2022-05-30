import React from "react"
import { BooksButton } from "./SelectBooksButtonStyles"

export default function SelectBooksButton(props) {
	const { activeState, onClick, buttonText } = props
	
	return (
		<BooksButton disabled={activeState} onClick={onClick}>{buttonText}</BooksButton>
	)
}