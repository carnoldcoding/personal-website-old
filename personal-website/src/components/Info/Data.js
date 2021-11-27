import svg4 from '../../images/svg-4.svg'
import svg1 from '../../images/svg-1.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Let me introduce myself',
    headline: 'About Me',
    description: "I'm a recent college graduate looking for exciting challenges in the field of computer science. I value communication and coordination just as much as technical proficiency, and believe that success in both is required to develop a strong program.",
    buttonLabel: "Next",
    imgStart: false,
    img: svg4,
    alt: 'img-alt',
    dark: true,
    primary: true,
    darkText: false,
    whereTo: 'resume'
}

export const homeObjTwo = {
    id: 'resume',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Work Credentials',
    headline: 'Resume',
    description: 'These are some of my work experiences and educational achievements.',
    buttonLabel: 'Next',
    imgStart: false,
    img: svg1,
    alt: 'img-alt',
    dark: false,
    primary: false,
    darkText: true,
    whereTo: 'projects'
}