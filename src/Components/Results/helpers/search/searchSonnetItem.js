import { lineIncludesKeyword } from "./keywordSearch"

function searchSingleSonnet(keyword, sonnetItem) {
  const { sonnetNumber, content: sonnetVerse } = sonnetItem
  const results = []
  
  for (const lineItem of sonnetVerse) {
    const { lineNumber, line } = lineItem
    const { match, startIndex, endIndex } = lineIncludesKeyword(line, keyword)
    if (match) {
      results.push({
        location: {
          sonnetNumber,
          lineNumber,
          startIndex,
          endIndex
        },
        content: sonnetItem
      })
    }
  }

  return results
}

export default function searchSonnetItem(keyword, searchItem) {
  const { id, title, format, content: sonnets } = searchItem
  var results = []

  for (const sonnetItem of sonnets) {
    const sonnetResults = searchSingleSonnet(keyword, sonnetItem)
    results.push(...sonnetResults)
  }

  return results.map(resultItem => {
    const info = { id, title, format }
    const { location, content } = resultItem
    return { info, location, content }
  })
}