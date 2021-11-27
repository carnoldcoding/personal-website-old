import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,ServicesCardLink,
ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import icon1 from '../../images/travel.svg'
import icon2 from '../../images/covid.svg'
import icon3 from '../../images/website.svg'

const Services = () => {
    return (
        <>
            <ServicesContainer id="projects">
                <ServicesH1>Projects</ServicesH1>
                <ServicesWrapper>
                    
                    <ServicesCardLink href="https://github.com/carnoldcoding/Personal-Website" 
                    target="_blank">
                        <ServicesCard>
                            <ServicesIcon src={icon1}/>
                            <ServicesH2>TravelTracker</ServicesH2>
                            <ServicesP>Application designed to log travel records</ServicesP>
                        </ServicesCard>
                    </ServicesCardLink>

                    <ServicesCardLink href="https://github.com/carnoldcoding/Covid-and-Politics"
                    target="_blank">
                        <ServicesCard>
                            <ServicesIcon src={icon2}/>
                            <ServicesH2>Covid and Politics</ServicesH2>
                            <ServicesP>Research project designed to prove a correlation between political affiliation and COVID-19 virality </ServicesP>
                        </ServicesCard>
                        </ServicesCardLink>

                    <ServicesCardLink href="https://github.com/carnoldcoding/Personal-Website"
                    target="_blank">
                        <ServicesCard>
                            <ServicesIcon src={icon3}/>
                            <ServicesH2>Personal Website</ServicesH2>
                            <ServicesP>You're currently on it!</ServicesP>
                        </ServicesCard>
                    </ServicesCardLink>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
