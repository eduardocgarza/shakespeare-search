import React from "react"
import { SearchButton } from "./SuggestedSearchButtonStyles"

export default function SuggestedSearchButton(props) {
  const { searchText, setSuggested } = props
  const handleSuggestedSearch = () => setSuggested(searchText)
  
  return (
    <SearchButton onClick={handleSuggestedSearch}>"{searchText}"</SearchButton>
  )
}