import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import Home from "Pages/Home/Home"
import Plays from "Pages/Plays/Plays"
import PlayItem from "Pages/Play/PlayItem/PlayItem"
import MainNavigation from "Components/Navigation/MainNavigation/MainNavigation"

const Wrapper = styled.div`
  padding: 30px 20px; 
  position: relative;

  @media (min-width: 768px) {
    padding: 30px;
  }
`

export default function AppRouter() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Wrapper>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/plays" element={<Plays />} />
            <Route path="/play/:playId" element={<PlayItem />} />
          </Routes>
        </Wrapper>
      </React.StrictMode>
    </BrowserRouter>
  )
}