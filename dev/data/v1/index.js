const fs = require("fs")

var items = [
  1001,
  1002,
  1003,
  1004,
  1005,
  1006,
  1007,
  1008,
  1009,
  1010,
  1011,
  1012,
  1013,
  1014,
  1015,
  1016,
  1017,
  1018,
  1019,
  1020,
  1024,
  1025,
  1027,
  1028,
  1029,
  1030,
  1031,
  1032,
  1033,
  1034,
  1035,
  1036,
  1037,
  1038,
  1039,
  1041,
  1042
]

function getActs(fileData) {
  const { tableContents } = fileData
  const acts = tableContents.map(actItem => ({
    actNumber: actItem.actNumber,
    actName: actItem.actName
  }))
  return acts
}

function getScenes(fileData) {
  const { tableContents } = fileData
  const generatedScenes = []
  for (const actItem of tableContents) {
    const { actNumber, scenes } = actItem
    for (const sceneItem of scenes) {
      const { sceneName, sceneNumber } = sceneItem
      generatedScenes.push({ actNumber, sceneNumber, sceneName })
    }
  }
  return generatedScenes
}

function getFileData(id) {
  const filePath = `./scriptParse/${id}/${id}.json`
  return require(filePath)
}

function executeActSceneModifications(id) {
  const fileData = getFileData(id)

  const acts = getActs(fileData)
  const scenes = getScenes(fileData)
  
  const outputPath = `./output/${id}/${id}.json`
  const { title, format, tableContents, content } = fileData
  const outputItem = {
    id: fileData.id, 
    title, 
    format, 
    tableContents,
    acts,
    scenes,
    content
  }
  fs.writeFileSync(outputPath, JSON.stringify(outputItem))
}

function generateDialogue(dialogue) {
  const outputDialogue = []
  
  const numItems = Math.floor(dialogue.length / 2)
  for (var index = 0; index < numItems; index++) {
    // @speaker
    const speakerItem = dialogue[index*2]
    const { name: speakerName } = speakerItem

    // @voice
    const voiceItem = dialogue[index*2+1]
    const { verses } = voiceItem

    outputDialogue.push({
      type: "Speaker",
      speakerName,
      verses
    })
  }

  return outputDialogue
}

function organizeDialogue(id) {
  const fileData = getFileData(id)
  const { content: acts } = fileData

  const actItems = []
  acts.forEach((actItem, actIndex) => {
    const { actName, scenes } = actItem
    const actNumber = actIndex+1
    
    const sceneItems = []
    scenes.forEach((sceneItem, index) => {
      const { sceneName, dialogue } = sceneItem
      const sceneNumber = index+1
  
      const numItems = dialogue.length
      var narrativeItem, realDialogue, newDialogue

      // When there are even items, "Voice" is first and "Scene" is last
      if(numItems % 2 === 0) {
        narrativeItem = dialogue[0]
        realDialogue = dialogue.slice(1)
        newDialogue = generateDialogue(realDialogue)
      }
      // Otherwise, odd items have "Voice" as first and "Voice" as last
      else {
        narrativeItem = dialogue[0]
        realDialogue = dialogue.slice(1, numItems-1)
        newDialogue = generateDialogue(realDialogue)
      }

      const { verses: narrativeVerses } = narrativeItem
      const introDialogue = { type: "Narrator", verses: narrativeVerses }
      const finalDialogue = [introDialogue, ...newDialogue]
      sceneItems.push({
        actNumber,
        actName,
        sceneNumber, 
        sceneName,
        dialogue: finalDialogue
      })
    })

    actItems.push(sceneItems)
  })

  const output = {...fileData, content: actItems }
  const outputPath = `./output/${id}/${id}.json`
  fs.writeFileSync(outputPath, JSON.stringify(output))
}

const TEST_MODE = false

function main() {
  if (TEST_MODE) {
    const output = organizeDialogue(1001)
  }
  else {
    for (const id of items) {
      organizeDialogue(id)
    }
    // console.log("Completed modifications.")
  }
}

main()