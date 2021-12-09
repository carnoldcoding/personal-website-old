import React, {useState, useEffect} from 'react'
import Video from '../../videos/video.mp4'
import { IntroContainer, VideoBg, IntroBg, IntroContent, IntroH1, IntroP, IntroBtnWrapper, ArrowForward, ArrowRight, Img, ImgWrap } from './IntroElements'
import {Button} from '../ButtonElement'
import CC from '../../images/CC-Glow.png'
import Aos from "aos";
import "aos/dist/aos.css"

const Intro = () => {
    useEffect(() =>{Aos.init({ duration: 3000});
    }, []);
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <IntroContainer id="home">
            <IntroBg>
                <VideoBg autoPlay loop muted src={Video} type = 'video/mp4' />
            </IntroBg>
            <IntroContent data-aos="fade-in">
                <ImgWrap>
                    <Img src = {CC} />
                </ImgWrap>
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