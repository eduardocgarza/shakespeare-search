import React, { useState } from "react"
import AdvancedSearchButtonMenu from "../AdvancedSearchButtonMenu/AdvancedSearchButtonMenu"
import PlaysHeaderButton from "Components/Buttons/PlaysHeaderButton/PlaysHeaderButton"
import tabularIcon from "../../../Assets/icons/icon-list.png"
import gridIcon from "../../../Assets/icons/icon-grid.png"
import PlaysGridViewInput from "../PlayInputs/PlaysGridViewInput/PlaysGridViewInput"
import PlaysListViewInput from "../PlayInputs/PlaysListViewInput/PlaysListViewInput"
import { AdvancedSearchWrapper, PlaysContainer, ExpandedHeader, HeaderMain, HeaderDescription, SearchHeader, PlaysHeader, SearchInputContainer } from "./AdvancedSearchStyles"

export default function AdvancedSearch() {
	const [gridViewOn, setGridView] = useState(false)
	
	function selectListView() {
		if (gridViewOn) setGridView(false)
	}

	function selectGridView() {
		if (!gridViewOn) setGridView(true)
	}

	const listViewSelected = !gridViewOn
	const gridViewSelected = gridViewOn
	const inputPlays = gridViewOn ? <PlaysGridViewInput /> : <PlaysListViewInput />
	
	return (
		<AdvancedSearchWrapper>
			<SearchHeader>
				<ExpandedHeader>
					<HeaderMain>Advanced search</HeaderMain>
					<HeaderDescription>Select the plays you want to search</HeaderDescription>
				</ExpandedHeader>
				<AdvancedSearchButtonMenu />
			</SearchHeader>
			<PlaysContainer>
				<PlaysHeader>
					<PlaysHeaderButton 
						icon={tabularIcon} 
						onClick={selectListView} 
						alt="List view" 
						selected={listViewSelected}
					/>
					<PlaysHeaderButton 
						icon={gridIcon} 
						onClick={selectGridView} 
						alt="Grid view" 
						selected={gridViewSelected}
					/>
				</PlaysHeader>
				<SearchInputContainer>{inputPlays}</SearchInputContainer>
			</PlaysContainer>
		</AdvancedSearchWrapper>
	)
}