import React from "react"
import useAppContext from "State/AppContext"
import { PlayLink, PlaysHeader, PlaysMenu, PlaysWrapper } from "./PlaysStyles"

export default function Plays() {
	const { plays } = useAppContext()

	const formattedPlays = plays.map(playItem => {
		const { id, title } = playItem
		const playRoute = `/play/${id}`
		return <PlayLink key={id} to={playRoute}>{title}</PlayLink>
	})
	
	return (
		<PlaysWrapper>
			<PlaysHeader>Plays</PlaysHeader>
			<PlaysMenu>{formattedPlays}</PlaysMenu>
		</PlaysWrapper>
	)
}