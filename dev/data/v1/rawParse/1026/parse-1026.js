// Source
// https://www.gutenberg.org/files/100/100-h/100-h.htm#chap02

// ----------------------------------------------
const PLAY_TITLE = "The Sonnets"
const PLAY_ID = 1026
// ----------------------------------------------

var rawItems = [...document.querySelectorAll("p")]
var items = rawItems.map(item => item.innerText).slice(0, 154)

var formattedItems = items.map(item => {
  var subItems = item.split("\n")

  var sonnetNumber = Number(subItems[0].trim())
  var content = subItems.slice(1)
  content = content.filter(c => c !== "")
  content = content.map(c => c.trim())

  return { sonnetNumber, content }
})

// ----------------------------------------------
// Output
// ----------------------------------------------
const output = {
  title: PLAY_TITLE,
  id: PLAY_ID, 
  content: formattedItems
}

copy(output)
// ----------------------------------------------

