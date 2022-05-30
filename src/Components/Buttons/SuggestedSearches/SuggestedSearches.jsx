import React from "react"
import useAppContext from "State/AppContext"
import SuggestedSearchButton from "../SuggestedSearchButton/SuggestedSearchButton"
import { SearchesWrapper } from "./SuggestedSearchesStyles"

export default function SuggestedSearches() {
  const allSearchItems = [
    "Be not afraid of greatness",
    "we know what we are",
    "sweet are the uses of adversity"
  ]

  const { executeSuggestedSearch } = useAppContext()
  const setSuggested = searchText => executeSuggestedSearch(searchText)

  const searchItems = allSearchItems.map((searchText, index) => (
    <SuggestedSearchButton key={index} setSuggested={setSuggested} searchText={searchText} />
  ))
  
  return (
    <SearchesWrapper>{searchItems}</SearchesWrapper>
  )
}