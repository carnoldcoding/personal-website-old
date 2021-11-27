import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { IntroContainer, VideoBg, IntroBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight } from './IntroElements'
import {Button } from '../ButtonElement'

const Intro = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </IntroBg>
            <IntroContent>
                <IntroH1>Cameron Arnold</IntroH1>
                <IntroP>
                    This is my website fuckers, enjoy it or explode
                </IntroP>
                <IntroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true' dark = 'true'>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro