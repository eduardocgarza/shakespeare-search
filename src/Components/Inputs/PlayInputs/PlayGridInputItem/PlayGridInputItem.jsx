import React, { useState } from "react"
import { PlayInputItemWrapper, PlayItemImage, PlayItemTitle } from "./PlayGridInputItemStyles"

export default function PlayGridInputItem(props) {
	const [hoverActive, setHoverActive] = useState(false)
	const { id, title, fullPath, selected, updateSelected } = props

	function handleSelect() {
		updateSelected(id)
	}
	
	function handleMouseOver() {
		if(!hoverActive) setHoverActive(true)
	}

	function handleMouseOut() {
		setHoverActive(false)
	}
	
	return (
		<PlayInputItemWrapper>
			<PlayItemImage
				src={fullPath}
				alt={title}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onClick={handleSelect}
				selected={selected}
			/>
			{hoverActive ? <PlayItemTitle>{title}</PlayItemTitle> : null}
		</PlayInputItemWrapper>
	)
}