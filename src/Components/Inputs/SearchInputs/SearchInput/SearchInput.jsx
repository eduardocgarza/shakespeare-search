import React from "react"
import useAppContext from "../../../../State/AppContext"
import { SearchInputContainer, SearchInputItem } from "./SearchInputStyles"

export default function SearchInput() {
	const { searchInput, setSearchInput, executeSearch } = useAppContext()

	function handleInput(e) {
		setSearchInput(e.target.value)
	}
	
	function handleSearch (e) {
		if (e.key === "Enter") {
			executeSearch()
    }
	}

	return (
		<SearchInputContainer>
			<SearchInputItem 
				placeholder="Press Enter to search"
				onChange={handleInput}
				onKeyDown={handleSearch}
				type="text" 
				value={searchInput}
			/>
		</SearchInputContainer>
	)
}