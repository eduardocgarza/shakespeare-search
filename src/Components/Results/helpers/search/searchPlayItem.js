import { lineIncludesKeyword } from "./keywordSearch"

function searchVerses(keyword, dialogueItem) {
  const { verseNumber: dialogueNumber, verses } = dialogueItem
  const results = []

  for (const verseItem of verses) {
    const { verseNumber, verse } = verseItem

    for (const lineItem of verse) {
      const { lineNumber, line } = lineItem
      const { match, startIndex, endIndex } = lineIncludesKeyword(line, keyword)
      if (match) {
        results.push({
          location: {
            dialogueNumber,
            verseNumber,
            lineNumber,
            startIndex,
            endIndex
          },
          content: dialogueItem
        })
      }
    }
  }

  return results 
}

export default function searchPlayItem(keyword, searchItem) {
  const { id, title, format, content } = searchItem
  const results = []

  for (const actItem of content) {
    const { actNumber, actName, scenes } = actItem
    
    for (const sceneItem of scenes) {
      const { sceneNumber, sceneName, dialogue } = sceneItem
      
      for (const dialogueItem of dialogue) {
        const verseResults = searchVerses(keyword, dialogueItem)
        const info = { id, title, format }
        const formattedResults = verseResults.map(verseResult => {
          const { location: currentLocation, content } = verseResult
          const location = { 
            actNumber, 
            actName,
            sceneNumber, 
            sceneName,
            ...currentLocation 
          }
          return { info, location, content }
        })
        results.push(...formattedResults)
      }
    }
  }

  return results 
}