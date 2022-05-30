import PlayResultItem from "Components/Results/Play/PlayResultItem/PlayResultItem"

export function generatePlayID(playItem) {
  const { info, location } = playItem
  const { id } = info
  const { actNumber, sceneNumber, dialogueNumber, verseNumber, lineNumber } = location
  return `${id}-${actNumber}-${sceneNumber}-${dialogueNumber}-${verseNumber}-${lineNumber}`
} 

export function generatePlayComponent(playItem) {
  const key = generatePlayID(playItem)
  return <PlayResultItem id={key} key={key} playItem={playItem} />
}
