import React, { useContext, useEffect, useState } from "react"
import { getPlaysData, shakespearePlays } from "../Assets/plays/shakespearePlays"
import { cleanSearchInput, getSearchResults } from "../Components/Results/helpers/search/handleSearch"

const initialState = {}
const AppContext = React.createContext(initialState)

/** 
 * @Provider
 * 
 */
export function AppContextProvider(props) {
  /** @Plays */
  const [plays, setPlays] = useState([])
  const allSelected = () => plays.reduce((p, c) => c.selected && p, true)
  const noneSelected = () => plays.reduce((p, c) => !c.selected && p, true)
  const getSelectedPlays = () => plays.filter(c=> c.selected)
  
  /** @Inputs */
  const [searchInput, setSearchInput] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  /** @Session */
  const [advancedSearchOn, setAdvancedSearch] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [suggestedSearch, setSuggestedSearch] = useState(false)

  /** @Results */
  const [results, setResults] = useState([])

  /** 
   * @actions
   * 
   */
  function handleScroll() {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  function selectPlay(id) {
    const updatedPlays = plays.map(s => {
      if (s.id === id) return ({ ...s, selected: !s.selected })
      else return s
    })
    setPlays(updatedPlays)
  }

  function selectAllPlays() {
    const updatedPlays = plays.map(p => ({ ...p, selected: true }))
    setPlays(updatedPlays)
  }

  function deselectAllPlays() {
    const updatedPlays = plays.map(p => ({ ...p, selected: false }))
    setPlays(updatedPlays)
  }

  function clearSearch() {
    setAdvancedSearch(false)
    setSearchInput("")
    setResults([])
    selectAllPlays() 
  }
  
  function executeSuggestedSearch(searchText) {
    setSearchInput(searchText)
    setSuggestedSearch(true)
  }

  function executeSearch() {
    setAdvancedSearch(false)
    const cleanInput = cleanSearchInput(searchInput)

    if(!cleanInput) {
      setErrorMessage("Please enter a valid search.")
    }
    else {
      const selectedPlays = getSelectedPlays()
      const selectedPlaysData = getPlaysData(selectedPlays) 
      const searchResults = getSearchResults(cleanInput, selectedPlaysData)
      setResults(searchResults)
    }
  }
  
  function initializePlays() {
    const allPlays = shakespearePlays.map(play => ({ ...play, selected: true }))
    setPlays(allPlays)
  }

  useEffect(() => {
    if (suggestedSearch) {
      executeSearch()
      setSuggestedSearch(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => { window.removeEventListener("scroll", handleScroll) }
  }, [])
  
  useEffect(() => {
    initializePlays()
  }, [])
  
  const appContextState = {
    plays,
    setPlays,
    searchInput,
    setSearchInput,
    results,
    advancedSearchOn,
    setAdvancedSearch,
    scrollPosition,
    selectPlay,
    allSelected,
    noneSelected,
    getSelectedPlays,
    selectAllPlays,
    deselectAllPlays,
    clearSearch,
    executeSearch,
    executeSuggestedSearch
  }

  return (
    <AppContext.Provider value={appContextState}>
      {props.children}
    </AppContext.Provider>
  )
}

/** 
 * @Consumer
 * 
 */
export default function useAppContext() {
  return useContext(AppContext)
}
