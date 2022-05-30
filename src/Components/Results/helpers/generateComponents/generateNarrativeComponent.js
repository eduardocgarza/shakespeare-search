import NarrativeResultItem from "Components/Results/Narrative/NarrativeResultItem/NarrativeResultItem"

export function generateNarrativeID(narrativeItem) {
  const { info, location } = narrativeItem
  const { id } = info
  const { verseNumber, lineNumber } = location
  return `${id}-${verseNumber}-${lineNumber}`
}

export function generateNarrativeComponent(narrativeItem) {
  const key = generateNarrativeID(narrativeItem)
  return <NarrativeResultItem key={key} id={key} narrativeItem={narrativeItem} />
}
