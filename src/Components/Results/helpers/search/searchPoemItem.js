import { lineIncludesKeyword } from "./keywordSearch"

function searchSinglePoem(keyword, poemItem) { 
  const { poemNumber, content: poemVerses } = poemItem
  const results = []

  for (const verseItem of poemVerses) {
    const { verseNumber, verse } = verseItem

    for (const lineItem of verse) {
      const { lineNumber, line } = lineItem
      const { match, startIndex, endIndex } = lineIncludesKeyword(line, keyword)
      if (match) {
        results.push({
          location: { 
            poemNumber, 
            verseNumber, 
            lineNumber, 
            startIndex, 
            endIndex 
          },
          content: poemItem
        })
      }
    }
  }

  return results
}

export default function searchPoemItem(keyword, searchItem) {
  const { id, title, format, content: poems } = searchItem
  var results = []

  for (const poemItem of poems) {
    const poemResults = searchSinglePoem(keyword, poemItem)
    results.push(...poemResults)
  }

  return results.map(resultItem => {
    const info = { id, title, format }
    const { location, content } = resultItem
    return { info, location, content }
  })
}