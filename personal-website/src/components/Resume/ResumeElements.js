import styled from 'styled-components'

export const ResumeContainer = styled.div`
    color: #fff;
    background: #000;

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`

export const ResumeWrapper = styled.div`
    display: flex;
    z-index: 1;
    height: 900px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 0px;
    justify-content: center;
    flex-direction: column;
`

export const ImgWrap = styled.div`
    max-width: 1000px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`

export const Img = styled.img`
    width: 45%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 100px;
    box-shadow: 0px 0px 15px 5px #0ff;
`

export const ResumeRow = styled.div`
    display: flex;
    flex-direction: row;
` 

export const TextWrapper = styled.div`
    flex: 1;
    max-width: auto;
    max-height: 100px;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 60px;
    margin-right: 5px;
    margin-top: 20px;

    //Debugging
    background: rgba(97, 201, 255, .3);
    border-radius: 10px;
    box-shadow: 0px 0px 15px 1px #0ff;
`

export const TopLine = styled.p`
    color: #01bf71;
    margin-top: 10px;
    text-align: center;  
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 30px;
`

export const Heading = styled.h1`
    margin-bottom: 30px;
    margin-top: 24px;
    font-size:40px;
    line-height: 1.1%;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: auto;
    margin-bottom:50px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;

`

export const ResumeH1 = styled.h1`
    text-align: center;    
    font-size: 2.3rem;
    color: #fff;
    margin-bottom: 0px;
    margin-top: 0px;

    @media screen and (max-width: 480px){
        
    font-size: 2rem;
    }
`
export const Column1 = styled.div`
    margin-bottom: 30px;
    margin-top: 10px;
    margin-right: 15px;
    padding: 0 15px;
    flex: 1;
    align-content: center;
`

export const Column2 = styled.div`
    margin-bottom: 30px;
    padding: 0 15px;
    flex: 3;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 35px;
    margin-left: 35px;
`