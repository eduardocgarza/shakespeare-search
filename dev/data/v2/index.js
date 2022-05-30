const fs = require("fs")
const shakespearesPlays = require("./input/shakespearePlays")
// console.log(shakespearesPlays)

// ---
const RUN_FILE = true
const RUN_MODIFY_TABLE_ITEMS = false
const RUN_MODIFY_PLAYS = true
const RUN_PLAY_TYPE = {
  "Narrative": true,
  "Play": true,
  "Poem": true,
  "Sonnet": true
}
// ---

const NARRATIVE_ITEMS = [1000, 1022, 1023, 1043]
const PLAY_ITEMS = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1024, 1025, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1041, 1042]
const POEM_ITEMS = [1021]
const SONNET_ITEMS = [1026]

function modifyPlaysTable() {
  const output = shakespearesPlays.map(v => {
    const { id, playName, fileName } = v
    var format
    if (NARRATIVE_ITEMS.includes(id)) format = "Narrative"
    else if (PLAY_ITEMS.includes(id)) format = "Play"
    else if (POEM_ITEMS.includes(id)) format = "Poem"
    else if (SONNET_ITEMS.includes(id)) format = "Sonnet"
    else {}

    return { id, title: playName, format, iconFile: fileName }
  })

  fs.writeFileSync("./output/shakespearesPlays.json", JSON.stringify(output))
}

function getFileData(id) {
  const rawData = fs.readFileSync(`./input/${id}.json`)
  return JSON.parse(rawData)
}

function outputModifiedData(id, output) {
  fs.writeFileSync(`./output/${id}.json`, JSON.stringify(output))
}

function formattNarrativeItem(item) {
  const { title, id, format, content: currentContent } = item

  const content = currentContent.map(contentItem => {
    const { verseNumber, verse: currentVerse } = contentItem
    const verse = currentVerse.map((lineItem, index) => {
      return { lineNumber: index+1, line: lineItem }
    })
    return { verseNumber, verse }
  })

  return { id, title, format, content }
}

function runNarrativeItems() {
  for (const id of NARRATIVE_ITEMS) {
    const data = getFileData(id)
    const output = formattNarrativeItem(data)
    outputModifiedData(id, output)
  }
}

function formattPlayItem(item) {
  const { id, title, format, tableContents, acts, scenes, 
    content: currentContent } = item

  const content = currentContent.map((actItem, a_index) => {
    const actInfo = acts[a_index]
    const { actNumber, actName } = actInfo

    const scenes = actItem.map(sceneItem => {
      const { sceneNumber, sceneName, dialogue: currentDialogue } = sceneItem
      var dialogue = currentDialogue.map((dialogueItem, b_index) => {
        const { type, speakerName, verses: currentVerses } = dialogueItem 
        
        if (!currentVerses) return null
        
        const verseNumber = b_index+1
        const verses = currentVerses.map((verseItem, c_index) => {
          const verseNumber = c_index+1
          const lines = verseItem.map((line, d_index) => {
            const lineNumber = d_index + 1
            return { lineNumber, line }
          })
          return { verseNumber, verse: lines }
        })
        
        if (speakerName) {
          return { verseNumber, type, speakerName, verses }
        }
        else {
          return { verseNumber, type, verses }
        }
      })
      dialogue = dialogue.filter(d => d != null)
      return { actNumber, sceneNumber, sceneName, dialogue }
    })

    return { actNumber, actName, scenes }
  })

  return { id, title, format, tableContents, acts, scenes, content } 
}

function runPlayItems() {
  for (const id of PLAY_ITEMS) {
    const data = getFileData(id)
    const output = formattPlayItem(data)
    outputModifiedData(id, output)
  }
}

function formattPoemItem(item) {
  const { id, title, format, content: currentContent } = item

  const tableContents = currentContent.map((contentItem, index) => {
    const poemNumber = index+1
    const { title } = contentItem
    return { poemNumber, title }
  })

  const content = currentContent.map((contentItem, a_index) => {
    const { title, content: currentPoemContent } = contentItem
    const poemNumber = a_index+1
    const poemContent = currentPoemContent.map(poemContentItem => {
      const { verseNumber, verse: currentVerse } = poemContentItem
      const verse = currentVerse.map((line, b_index) => {
        const lineNumber = b_index+1
        return { lineNumber, line }
      })
      return { verseNumber, verse }
    })

    return { poemNumber, title, content: poemContent }
  })
  
  return { id, title, format, tableContents, content }
}

function runPoemItems() {
  for (const id of POEM_ITEMS) {
    const data = getFileData(id)
    const output = formattPoemItem(data)
    outputModifiedData(id, output)
  }
}

function formattSonnetItem(item) {
  const { id, title, format, content: currentContent } = item

  const content = currentContent.map(contentItem => {
    const { sonnetNumber, content: currentSonnetContent } = contentItem
    const sonnetContent = currentSonnetContent.map((line, index) => {
      const lineNumber = index+1
      return { lineNumber, line }
    })
    return { sonnetNumber, content: sonnetContent }
  })

  return { id, title, format, content }
}

function runSonnetItems() {
  for (const id of SONNET_ITEMS) {
    const data = getFileData(id)
    const output = formattSonnetItem(data)
    outputModifiedData(id, output)
  }
}

function modifyPlays() {
  if (RUN_PLAY_TYPE["Narrative"]) {
    // > runNarrativeItems
    console.log("> Running runNarrativeItems: ")
    runNarrativeItems()
    console.log(`runNarrativeItems() completed. \n`)
  }

  if (RUN_PLAY_TYPE["Play"]) {
    // > runPlayItems
    console.log("> Running runPlayItems: ")
    runPlayItems()
    console.log(`runPlayItems() completed. \n`)
  }

  if (RUN_PLAY_TYPE["Poem"]) {
    // > runPoemItems
    console.log("> Running runPoemItems: ")
    runPoemItems()
    console.log(`runPoemItems() completed. \n`)
  }

  if (RUN_PLAY_TYPE["Sonnet"]) {
    // > runSonnetItems
    console.log("> Running runSonnetItems: ")
    runSonnetItems()
    console.log(`runSonnetItems() completed. \n`)
  }
}

function main() {
  if (RUN_MODIFY_TABLE_ITEMS) {
    modifyPlaysTable()
    console.log(":: modifyPlaysTable() executed.")
  } 
  else if (RUN_MODIFY_PLAYS) {
    modifyPlays()
    console.log(":: modifyPlays() executed.")
  }
  else {
    console.log("Running main. No outputs.")
  }
}

if (RUN_FILE) main()