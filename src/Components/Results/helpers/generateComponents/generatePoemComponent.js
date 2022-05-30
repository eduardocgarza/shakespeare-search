import PoemResultItem from "Components/Results/Poem/PoemResultItem/PoemResultItem"

export function generatePoemID(poemItem) {
  const { info, location } = poemItem
  const { id } = info
  const { poemNumber, verseNumber, lineNumber } = location
  return `${id}-${poemNumber}-${verseNumber}-${lineNumber}`
}

export function generatePoemComponent(poemItem) {
  const key = generatePoemID(poemItem)
  return <PoemResultItem id={key} key={key} poemItem={poemItem} />
}
