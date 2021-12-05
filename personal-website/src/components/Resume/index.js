import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css"
import svg1 from '../../images/svg-1.svg'
import {Button} from '../ButtonElement'

import { ResumeContainer, ResumeWrapper, ResumeRow, 
    TextWrapper, TopLine, Heading, Subtitle, Column1, Column2,
    ResumeH1, ImgWrap, BtnWrap } from './ResumeElements'

const ResumeSection = () => {
    useEffect(() =>{Aos.init({ duration: 3000});
    }, []);
    return (
        <ResumeContainer id="resume">
            <ResumeWrapper id="resumeWrapper"> 
                <ResumeH1 data-aos="fade-down">Resume</ResumeH1>
                <TopLine data-aos="fade-down">My work credentials</TopLine>
                <ResumeRow>
                    <Column1>
                        <TextWrapper data-aos="fade-right">
                            <Subtitle>Bachelor of Science</Subtitle>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <TextWrapper data-aos="fade-left">    
                            <Subtitle>Graduated from Ithaca College in August 2021</Subtitle>
                        </TextWrapper>
                    </Column2>
                </ResumeRow>

                <ResumeRow>
                    <Column1>
                        <TextWrapper data-aos="fade-right">
                            <Subtitle>Ithaca College Dean's List</Subtitle>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <TextWrapper data-aos="fade-left">    
                            <Subtitle>Nomination in 2021 and 2020</Subtitle>
                        </TextWrapper>
                    </Column2>
                </ResumeRow>

                <ResumeRow>
                    <Column1>
                        <TextWrapper data-aos="fade-right">
                            <Subtitle>42 Silicon Valley</Subtitle>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <TextWrapper data-aos="fade-left">    
                            <Subtitle>Graduated from 42 Silicon Valley's Bootcamp in 2019</Subtitle>
                        </TextWrapper>
                    </Column2>
                </ResumeRow>
                <BtnWrap data-aos="fade-right">
                        <Button to="projects" primary = 'true' dark = 'false' smooth={true}
                            duration={500}
                            spy={true} offset={-40}> Next
                        </Button>
                    </BtnWrap>

            </ResumeWrapper>
        </ResumeContainer>
    )
}

export default ResumeSection
