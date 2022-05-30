import { PLAY_TYPES } from "Assets/helpers/playTypes"
import { generateNarrativeComponent } from "./generateNarrativeComponent"
import { generatePlayComponent } from "./generatePlayComponent"
import { generatePoemComponent } from "./generatePoemComponent"
import { generateSonnetComponent } from "./generateSonnetComponent"

export function getHighlightSubstrings(line, startIndex, endIndex) {
  const textFront = line.substring(0, startIndex)
  const textHighlight = line.substring(startIndex, endIndex)
  const textBack = line.substring(endIndex)
  return { textFront, textHighlight, textBack }
}

function handleGenerateComponent(resultItem) {
  const { info } = resultItem
  const { format } = info
  
  switch(format) {
    case PLAY_TYPES.NARRATIVE: return generateNarrativeComponent(resultItem)
    case PLAY_TYPES.PLAY: return generatePlayComponent(resultItem)
    case PLAY_TYPES.POEM: return generatePoemComponent(resultItem)
    case PLAY_TYPES.SONNET: return generateSonnetComponent(resultItem)
    default: {}
  }
}

export function getResultsComponents(results) {
  const componentResults = results.map(resultItem => {
    return { resultItem, component: handleGenerateComponent(resultItem) }
  })
  
  const hashMap = {}
  for (const componentItem of componentResults) {
    const { resultItem, component } = componentItem
    const { id } = resultItem.info
    if (!hashMap[id]) {
      hashMap[id] = [ { resultItem, component }]
    }
    else {
      hashMap[id].push({ resultItem, component })
    }
  }
  return hashMap
}