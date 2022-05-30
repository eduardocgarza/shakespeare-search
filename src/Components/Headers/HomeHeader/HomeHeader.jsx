import React from "react"
import shakespeareImage from "../../../Assets/images/shakespeare.jpg"
import { HeaderIcon, HeaderWrapper, IconContainer, MainHeader } from "./HomeHeaderStyles"

export default function HomeHeader() {
	return (
		<HeaderWrapper>
			<MainHeader>The Complete Works of William Shakespeare</MainHeader>
			<IconContainer>
				<HeaderIcon src={shakespeareImage} alt="William Shakespeare" />
			</IconContainer>
		</HeaderWrapper>
	)
}