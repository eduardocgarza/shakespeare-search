import React from "react"
import useAppContext from "../../../State/AppContext"
import SelectBooksButton from "../../Buttons/SelectBooksButton/SelectBooksButton"
import { ItemsSelected, MenuWrapper } from "./AdvancedSearchButtonMenuStyles"

export default function AdvancedSearchButtonMenu() {
	const { 
		allSelected,
		noneSelected,
		getSelectedPlays, 
		selectAllPlays, 
		deselectAllPlays 
	} = useAppContext()

	const numPlaysSelected = getSelectedPlays().length
	const allPlaysSelected = allSelected()
	const noPlaysSelected = noneSelected()

	return (
		<MenuWrapper>
			<ItemsSelected>{numPlaysSelected} selected</ItemsSelected>
			<SelectBooksButton 
				activeState={allPlaysSelected} 
				onClick={selectAllPlays} 
				buttonText="Select all" 
			/>
			<SelectBooksButton 
				activeState={noPlaysSelected}
				onClick={deselectAllPlays} 
				buttonText="Unselect all" 
			/>
		</MenuWrapper>
	)
}
