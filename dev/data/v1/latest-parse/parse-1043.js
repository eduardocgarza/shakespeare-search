// Source
// http://shakespeare.mit.edu/Poetry/LoversComplaint.html

var items = [...document.querySelectorAll("blockquote")]

var formattedItems = items.map((i, index) => {
  var text = i ? i.innerText : ""
  var textItems = text.split('\n')
  var filteredItems = textItems.filter(s => !!s)
  
  return {
    verse: index+1,
    content: filteredItems
  }
})

var formattedItem = {
  title: "Venus And Adonis",
  content: formattedItems
}

copy(formattedItem)