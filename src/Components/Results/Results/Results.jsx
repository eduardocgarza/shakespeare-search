import React from "react"
import useAppContext from "../../../State/AppContext"
import BackToTopButton from "../../Buttons/BackToTopButton/BackToTopButton"
import { getResultsComponents } from "../helpers/generateComponents/generateComponents"
import { HeaderLink, ResultsContainer, ResultsContent, ResultsHeader, ResultsHeading, ResultsWrapper } from "./ResultsStyles"

export default function Results() {
  const { scrollPosition, results } = useAppContext()

  const uniqueResultsHashMap = {}
  for (const resultItem of results) {
    const { info } = resultItem
    const { id } = info
    if (!uniqueResultsHashMap[id]) {
      uniqueResultsHashMap[id] = [resultItem]
    }
    else {
      uniqueResultsHashMap[id].push(resultItem)
    }
  }
  
  const headerResults = Object.values(uniqueResultsHashMap).map(resultItem => {
    const firstItem = resultItem[0]
    const { info } = firstItem
    const { id, title } = info
    const anchorRoute = `#${id}`
    return <HeaderLink smooth key={id} to={anchorRoute}>{title}</HeaderLink>
  })

  const activeResults = getResultsComponents(results)
  var activeResultsComponent = []
  for (const [id, results] of Object.entries(activeResults)) {
    const componentResults = results.map(v => v.component)
    activeResultsComponent.push(
      <ResultsContainer key={id} id={id}>{componentResults}</ResultsContainer>
    )
  }

  const noCurrentResults = results.length === 0
  const showTopButton = !noCurrentResults && (scrollPosition > 700)
  
  return (
    <>
      {!noCurrentResults ? (
        <ResultsWrapper>
          <ResultsHeading>Search results</ResultsHeading>
          <ResultsHeader>{headerResults}</ResultsHeader>
          <ResultsContent>{activeResultsComponent}</ResultsContent>
        </ResultsWrapper>
      ) : null}
      {showTopButton ? <BackToTopButton /> : null}
    </>
  )
}