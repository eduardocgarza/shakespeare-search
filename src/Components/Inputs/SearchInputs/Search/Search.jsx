import React from "react"
import AdvancedSearch from "../../AdvancedSearch/AdvancedSearch"
import SearchInput from "../SearchInput/SearchInput"
import useAppContext from "../../../../State/AppContext"
import SearchButton from "../../../Buttons/SearchButton/SearchButton"
import advancedIcon from "../../../../Assets/icons/icon-advanced-search.png"
import clearIcon from "../../../../Assets/icons/icon-clear-search.png"
import { SearchWrapper, SearchContainer, SelectedItems, ButtonsContainer } from "./SearchStyles"
import SuggestedSearches from "Components/Buttons/SuggestedSearches/SuggestedSearches"

export default function Search() {
	const { 
		advancedSearchOn, 
		getSelectedPlays,
		setAdvancedSearch, 
		clearSearch
	} = useAppContext()
	
	const selectedPlays = getSelectedPlays()
	const toggleAdvanced = () => setAdvancedSearch(!advancedSearchOn)
	const numPlaysSelected = selectedPlays.length
	
	return (
		<SearchWrapper>
			<SearchContainer>
				<SearchInput />
				<ButtonsContainer>
					<SearchButton onClick={clearSearch} icon={clearIcon} alt="Clear search" />
					<SearchButton onClick={toggleAdvanced} icon={advancedIcon} alt="Advanced search" />
					<SelectedItems advancedSearchOn={advancedSearchOn}>{numPlaysSelected}</SelectedItems>
				</ButtonsContainer>
			</SearchContainer>
			<SuggestedSearches />
			{advancedSearchOn ? <AdvancedSearch /> : null}
		</SearchWrapper>
	)
}