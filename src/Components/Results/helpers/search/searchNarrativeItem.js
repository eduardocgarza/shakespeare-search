import { lineIncludesKeyword } from "./keywordSearch"

export default function searchNarrativeItem(keyword, searchItem) {
  const { id, title, format, content } = searchItem
  const results = [] 

  for (const verseItem of content) {
    const { verseNumber, verse } = verseItem

    for (const lineItem of verse) {
      const { lineNumber, line } = lineItem
      const { match, startIndex, endIndex } = lineIncludesKeyword(line, keyword)
      if (match) {
        results.push({
          info: { id, title, format }, 
          location: { verseNumber, lineNumber, startIndex, endIndex },
          content: verseItem
        })
      }
    }
  }

  return results
}