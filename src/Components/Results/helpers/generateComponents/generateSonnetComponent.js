import SonnetResultItem from "Components/Results/Sonnet/SonnetResultItem/SonnetResultItem"

export function generateSonnetID(sonnetItem) {
  const { info, location } = sonnetItem
  const { id } = info
  const { sonnetNumber, lineNumber } = location
  return `${id}-${sonnetNumber}-${lineNumber}`
}

export function generateSonnetComponent(sonnetItem) {
  const key = generateSonnetID(sonnetItem)
  return <SonnetResultItem key={key} id={key} sonnetItem={sonnetItem} />
}
