import React, {useEffect} from 'react'
import {Button} from '../ButtonElement'
import Aos from "aos";
import "aos/dist/aos.css"


import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,
TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, 
    topLine, lightText, headline, 
    darkText, description,
    buttonLabel, img, alt, 
    primary, dark, dark2, whereTo}) => {
        useEffect(() =>{Aos.init({ duration: 2000});
    }, []);
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper data-aos="fade-right">
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to={whereTo}
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1:0}
                                dark={dark ? 1:0} 
                                dark2={dark ? 1:0}
                                
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap data-aos="fade-left">
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
