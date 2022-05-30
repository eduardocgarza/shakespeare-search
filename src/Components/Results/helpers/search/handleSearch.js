import searchPoemItem from "./searchPoemItem"
import searchSonnetItem from "./searchSonnetItem"
import searchNarrativeItem from "./searchNarrativeItem"
import searchPlayItem from "./searchPlayItem"
import { PLAY_TYPES } from "Assets/helpers/playTypes"

export function cleanSearchInput(searchText) {
  return searchText.trim().toLowerCase()
}

function handleSearchItem(searchText, playItem) {
  const { format } = playItem
  
  switch(format) {
    case PLAY_TYPES.NARRATIVE: return searchNarrativeItem(searchText, playItem)
    case PLAY_TYPES.PLAY: return searchPlayItem(searchText, playItem)
    case PLAY_TYPES.POEM: return searchPoemItem(searchText, playItem)
    case PLAY_TYPES.SONNET: return searchSonnetItem(searchText, playItem)
    default: return []
  }
}

export function getSearchResults(searchText, selectedPlaysData) {
  const results = []

  for (const playItem of selectedPlaysData) {
    const playItemResults = handleSearchItem(searchText, playItem)
    results.push(...playItemResults)
  }
  return results
}
