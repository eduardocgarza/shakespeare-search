import { PLAY_TYPES } from "Assets/helpers/playTypes"
import BackToTopButton from "Components/Buttons/BackToTopButton/BackToTopButton"
import React, { useEffect } from "react"
import { useLocation, useParams } from "react-router"
import useAppContext from "State/AppContext"
import FormatNarrativeItem from "../FormatNarrative/FormatNarrativeItem/FormatNarrativeItem"
import FormatPlayItem from "../FormattPlay/FormatPlayItem/FormatPlayItem"
import FormatPoemItem from "../FormattPoem/FormatPoemItem/FormatPoemItem"
import FormatSonnetItem from "../FormattSonnet/FormatSonnetItem/FormatSonnetItem"
import PlayHeaderNavigation from "../PlayHeaderNavigation/PlayHeaderNavigation"
import { PlayItemContent, PlayItemWrapper } from "./PlayItemStyles"

export default function PlayItem() {
	const { playId } = useParams()
	const { pathname, hash, key } = useLocation()
	const { plays, scrollPosition } = useAppContext()
	const id = Number(playId)
	var playContent, invalidPlay = false
	
	// https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
	useEffect(() => {
    if (hash === '') {
			window.scrollTo(0, 0)
		}
    else {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
					element.scrollIntoView({ behavior: "smooth" })
				}
      }, 0)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash, key]); // do this on route change
	
	const selectedPlay = plays.filter(p => p.id === id)[0]
	if(!selectedPlay) {
		invalidPlay = true
		playContent = <p>Invalid play</p>
	}
	else {
		const { format } = selectedPlay
		const playData = require(`../../../Assets/plays/${id}.json`)
		switch (format) {
			case PLAY_TYPES.NARRATIVE: {
				playContent = <FormatNarrativeItem play={playData} />
				break
			} 
			case PLAY_TYPES.PLAY: {
				playContent = <FormatPlayItem play={playData} />
				break
			} 
			case PLAY_TYPES.POEM: {
				playContent = <FormatPoemItem play={playData} />
				break
			} 
			case PLAY_TYPES.SONNET: {
				playContent = <FormatSonnetItem play={playData} />
				break
			} 
			default: {}
		}
	}

  const showTopButton = scrollPosition > 200

	return (
		<PlayItemWrapper>
			<PlayHeaderNavigation id={id} />
			<PlayItemContent>{playContent}</PlayItemContent>
			{showTopButton ? <BackToTopButton /> : null}
		</PlayItemWrapper>
	)
}