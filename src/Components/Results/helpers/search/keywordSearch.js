
export function getKeywordLocation(textItem, keyword) {
  const formattedKeyword = formatWord(keyword)
  var startIndex, endIndex

  for (let index = 0; index < textItem.length; index++) {
    const currentLine = textItem.substring(index)
    let formattedLine = formatWord(currentLine)
    formattedLine = formattedLine.substring(0, formattedKeyword.length)

    if (formattedLine === formattedKeyword) {
      startIndex = index
      break
    }
  }

  for (let index = textItem.length; index > 0; index--) {
    const currentLine = textItem.substring(0, index)

    let formattedLine = formatWord(currentLine)
    formattedLine = formattedLine.substring(formattedLine.length - formattedKeyword.length, formattedLine.length)

    if (formattedLine === formattedKeyword) {
      endIndex = index-1
      break
    }
  }
  
  return { startIndex, endIndex }
}

export function formatWord(keyword) {
  var formattedKeyword = keyword.trim()
  formattedKeyword = formattedKeyword.toLowerCase()
  formattedKeyword = formattedKeyword.replaceAll("-", " ")
  formattedKeyword = formattedKeyword.replaceAll(",", "")
  formattedKeyword = formattedKeyword.replaceAll("`", "")
  formattedKeyword = formattedKeyword.replaceAll(":", "")
  formattedKeyword = formattedKeyword.replaceAll(";", "")
  formattedKeyword = formattedKeyword.replaceAll("'", "")
  return formattedKeyword
}

export function formatWordInfinity(keyword) {
  var formattedKeyword = keyword.trim()
  formattedKeyword = formattedKeyword.toLowerCase()
  formattedKeyword = formattedKeyword.replaceAll("-", Infinity)
  formattedKeyword = formattedKeyword.replaceAll(",", Infinity)
  formattedKeyword = formattedKeyword.replaceAll("`", Infinity)
  formattedKeyword = formattedKeyword.replaceAll(":", Infinity)
  formattedKeyword = formattedKeyword.replaceAll(";", Infinity)
  formattedKeyword = formattedKeyword.replaceAll("'", Infinity)
  return formattedKeyword
}

const SEARCH_TYPE_SIMPLE = true
const SEARCH_TYPE_MEDIUM = false
// const SEARCH_TYPE_ADVANCED = false 

function simpleKeywordMatch(line, keyword) {
  const formatLine = line.toLowerCase()
  const formatKeyword = keyword.toLowerCase()

  const match = formatLine.includes(formatKeyword)
  const startIndex = formatLine.indexOf(formatKeyword)
  const endIndex = startIndex + formatKeyword.length
  return { match, startIndex, endIndex }
}

function mediumKeywordMatch(line, keyword) {
  const formattedLine = formatWordInfinity(line)
  const formattedKeyword = formatWord(keyword)

  const keywordLength = formattedKeyword.length
  const loopLength = formattedLine.length - keywordLength
  
  var startIndex, endIndex
  for (let index = 0; index < loopLength; index++) {
    startIndex = index
    let matchingLetters = 0
    let lineIndex = index
    let keywordIndex = 0
    
    while (keywordIndex < keywordLength) {
      const lineLetter = formattedLine[lineIndex]
      const keywordLetter = formattedKeyword[keywordIndex]
      
      if (lineLetter === keywordLetter) {
        matchingLetters++
        lineIndex++
        keywordIndex++
        // Done - match found:
        if(matchingLetters === keywordLength) {
          endIndex = lineIndex
          break
        }
      }
      else if (lineLetter === Infinity) {
        // Ignore this letter
        lineIndex++
        continue
      }
      else {
        // Break loop as there is no match on this startIndex
        break
      }
    }

    if (endIndex) break
  }
  
  return { startIndex, endIndex }
}

function advancedKeywordMatch(line, keyword) {
  const formattedLine = formatWord(line)
  var formattedKeyword = formatWord(keyword)
  return formattedLine.includes(formattedKeyword)
}

export function lineIncludesKeyword(line, keyword) {
  if (SEARCH_TYPE_SIMPLE) return simpleKeywordMatch(line, keyword)
  else if (SEARCH_TYPE_MEDIUM) return mediumKeywordMatch (line, keyword)
  else return advancedKeywordMatch(line, keyword)
}
