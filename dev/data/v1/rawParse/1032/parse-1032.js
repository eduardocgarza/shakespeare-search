// Source
// http://shakespeare.mit.edu/hamlet/full.html

// ----------------------------------------------
const PLAY_TITLE = "The Tragedy Of Hamlet, Prince Of Denmark"
const PLAY_ID = 1032
// ----------------------------------------------


var items = [...document.querySelectorAll("body > *")]
items = items.filter(i => i.localName !== "table")

var formattedItems = items.map(currentItem => {
  var type

  // What type of item do we have?
  var currentItemHeader = currentItem.localName === "h3"
  var currentItemSpeaker = currentItem.localName === "a"
  var emptyParagraph = currentItem.localName === "p"

  const textItem = currentItem.innerText
  
  if(currentItemHeader) {
    if (textItem.includes("ACT"))  {
      return { type: "Act", name: textItem }
    }
    else {
      return { type: "Scene", name: textItem }
    } 
  }
  else if (currentItemSpeaker) {
    return { type: "Speaker", name: textItem }
  }
  else if (emptyParagraph) {
    return null
  }
  else {
    type = "Voice"
    return { type, verses: textItem }
  }
})

// Remove empty "" items between types of items.
formattedItems = formattedItems.filter(s => !!s)

formattedItems = formattedItems.map(s => {
  if (s.type !== "Voice") return s
  else {
    const { verses: currentContent } = s
    var content = currentContent.split('\n')

    var updatedContent = []
    var currentParagraph = []

    for(var index = 0; index < content.length; index++) {
      const contentItem = content[index]

        if(contentItem === "") {
          updatedContent.push(currentParagraph)
          currentParagraph = []
        }
        else {
          currentParagraph.push(contentItem)
        } 
    }
    if (currentParagraph.length !== 0) updatedContent.push(currentParagraph)

    // Remove double "" "", which create empty arrays []
    updatedContent = updatedContent.map(c => {
      return c.filter(p => p.length !== 0)
    })

    // Remove empty verses []
    updatedContent = updatedContent.filter(c => c.length !== 0)
    
    return { ...s, verses: updatedContent }
  }
})

// Set "Voice" contents inside "Scene"
var typeClosure = function(type) {
  return (item, index) => (item.type === type) ? index : -1
}

var filterNegatives = f => f !== -1

var actIndices = formattedItems.map(typeClosure("Act")).filter(filterNegatives)
var sceneIndices = formattedItems.map(typeClosure("Scene")).filter(filterNegatives)

// Set "Scene" inside "Act"

var currentIndex = 0
var nextIndex = 1
var actsWithScenes = []
var currentScenes = []

sceneIndices.forEach(sceneIndex => {
  var currentAct = actIndices[currentIndex]
  var nextAct = actIndices[nextIndex]
  
  if(sceneIndex > nextAct) {
    actsWithScenes.push({
      act: currentAct,
      scenes: currentScenes
    })
    currentScenes = [sceneIndex]
    currentIndex = nextIndex
    nextIndex = nextIndex + 1
  }
  else {
    currentScenes.push(sceneIndex)
  }
})
if(currentScenes.length !==0 ) {
  actsWithScenes.push({
    act: actIndices[currentIndex],
    scenes: currentScenes
  })
}

var acts = actsWithScenes.map(s => {
  const { act: actIndex, scenes } = s
  return {
    act: {
      actIndex,
      actName: formattedItems[actIndex]
    },
    scenes: scenes.map(index => ({
      sceneIndex: index,
      sceneName: formattedItems[index]
    }))
  }
})

const tableContents = acts.map((act, index) => {
  return {
    actNumber: index+1,
    actName: act.act.actName.name,
    scenes: act.scenes.map((s, jindex) => ({ 
      sceneName: s.sceneName.name, 
      sceneNumber: jindex+1
    }))
  }
})

/**
 * Include the contents inside each scene.
 */
// acts = [{ act: { actIndex, actName }, scenes: [{ sceneIndex, sceneName }] }]

var finalItems = acts.map((actItem, jindex) => {

  const { act, scenes } = actItem
  const { actIndex, actName } = act

  const formattedScenes = scenes.map((sceneItem, index) => {
    const { sceneIndex, sceneName } = sceneItem

    const noNextAct = (acts.length-1) === jindex
    const noNextScene = (scenes.length-1) === index

    const sceneContentIndexStart = sceneIndex+1
    var sceneContentIndexEnd 

    if (noNextScene && noNextAct) {
      // We're at the end of the whole play:
      sceneContentIndexEnd = formattedItems.length-1
    }
    else if (noNextScene && !noNextAct) {
      // We're at the end of an act:
      const nextAct = acts[jindex+1]
      sceneContentIndexEnd = nextAct.act.actIndex-1
    }
    else {
      // We're at the end of a normal scene, with a next scene:
      const nextScene = scenes[index+1]
      sceneContentIndexEnd = nextScene.sceneIndex
    }

    // Return the current scene with its content
    return {
      sceneName: sceneName.name,
      dialogue: formattedItems.slice(sceneContentIndexStart, sceneContentIndexEnd+1)
    }
  })
  
  return {
    actName: actName.name,
    scenes: formattedScenes
  }
})

// ----------------------------------------------
// Output
// ----------------------------------------------
const output = {
  title: PLAY_TITLE,
  id: PLAY_ID, 
  tableContents,
  content: finalItems
}

copy(output)
// ----------------------------------------------

