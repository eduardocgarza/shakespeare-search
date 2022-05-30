import React, { useState } from "react"
import romanize from "Assets/helpers/romanize"
import { ActButton, ActsContainer, SceneItem, ScenesContainer, TableContentsContainer } from "./PlayTableContentsStyles";

export default function PlayTableContents (props) {
  const { tableContents } = props
  const [selectedActIndex, setActIndex] = useState(0)

  function handleSetActIndex(actIndex) {
    if (actIndex !== selectedActIndex) setActIndex(actIndex)
  }

  const actItems = tableContents.map(actItem => {
    const { actNumber } = actItem
    const actIndex = actNumber-1
    const romanActNumber = romanize(actNumber)
    const selected = actIndex === selectedActIndex
    return (
      <ActButton 
        smooth 
        key={actNumber}
        selected={selected}
        onClick={() => handleSetActIndex(actIndex)}
      >{romanActNumber}
      </ActButton>
    )
  })
  
  const { scenes } = tableContents[selectedActIndex]
  const sceneItems = scenes.map(sceneItem => {
    const { sceneName, sceneNumber } = sceneItem
    const sceneAnchor = `#${selectedActIndex+1}-${sceneNumber}`
    return <SceneItem smooth key={sceneNumber} to={sceneAnchor}>{sceneName}</SceneItem>
  })
  
  return (
    <TableContentsContainer>
      <ActsContainer>{actItems}</ActsContainer>
      <ScenesContainer>{sceneItems}</ScenesContainer>
    </TableContentsContainer>
  )
}