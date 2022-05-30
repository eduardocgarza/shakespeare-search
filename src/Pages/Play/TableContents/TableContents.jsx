import React, { useState } from "react"
import TableContentsButton from "../TableContentsButton/TableContentsButton"
import arrowLeftIcon from "../../../Assets/icons/icon-arrow-left.png"
import arrowRightIcon from "../../../Assets/icons/icon-arrow-right.png"
import { MainContent, TableContentsContainer, VerseLink } from "./TableContentsStyles"

export default function TableContents (props) {
  const [pageIndex, setPageIndex] = useState(0)
  const { tableContents } = props
  const verseIDs = [...tableContents]
  const pages = []
  while (verseIDs.length) pages.push(verseIDs.splice(0, 10))

  const contents = pages[pageIndex].map(verseNumber => {
    const verseAnchor = `#${verseNumber}`
    return <VerseLink smooth to={verseAnchor} key={verseNumber}>{verseNumber}</VerseLink>
  }) 

  function shiftLeft() {
    if (pageIndex !== 0) setPageIndex(pageIndex-1)
  }

  function shiftRight() {
    const numPages = pages.length-1
    if (pageIndex !== numPages) setPageIndex(pageIndex+1)
  }

  const noMoreLeft = pageIndex === 0
  const noMoreRight = pageIndex === (pages.length-1)
  
  return (
    <TableContentsContainer>
      <TableContentsButton 
        onClick={shiftLeft}
        icon={arrowLeftIcon}
        alt="Shift pagination left"
        disabled={noMoreLeft}
      />
      <MainContent>{contents}</MainContent>
      <TableContentsButton 
        onClick={shiftRight}
        icon={arrowRightIcon}
        alt="Shift pagination right"
        disabled={noMoreRight}
      />
    </TableContentsContainer>
  )
}