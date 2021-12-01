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
                    Software Engineer | Web Developer
                </IntroP>
                <IntroBtnWrapper>
                    <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary = 'true' dark = 'true' smooth={true}
                                duration={500}
                                spy={true} offset={-40}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </IntroBtnWrapper>
            </IntroContent>
        </IntroContainer>
    )
}

export default Intro