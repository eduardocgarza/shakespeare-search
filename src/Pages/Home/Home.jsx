import React from "react"
import HomeHeader from "../../Components/Headers/HomeHeader/HomeHeader"
import Results from "../../Components/Results/Results/Results"
import Search from "../../Components/Inputs/SearchInputs/Search/Search"
import { HomeWrapper } from "./HomeStyles"

export default function Home() {
  return (
    <HomeWrapper>
      <HomeHeader />
			<Search />
      <Results />
    </HomeWrapper>
  )
}
