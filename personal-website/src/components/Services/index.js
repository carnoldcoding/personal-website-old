import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,
ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'
import icon1 from '../../images/svg-1.svg'
import icon2 from '../../images/svg-1.svg'
import icon3 from '../../images/svg-1.svg'

const Services = () => {
    return (
        <>
            <ServicesContainer id="projects">
                <ServicesH1>Conquests</ServicesH1>
                <ServicesWrapper>
                    
                    <ServicesCard>
                        <ServicesIcon src={icon1}/>
                        <ServicesH2>Ur dad</ServicesH2>
                        <ServicesP>smashed</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon2}/>
                        <ServicesH2>Ur mom</ServicesH2>
                        <ServicesP>smashed</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={icon3}/>
                        <ServicesH2>Ur granddad</ServicesH2>
                        <ServicesP>smashed</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
