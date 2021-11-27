import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,
SocialIconLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Footer</FooterLinkTitle>
                                <FooterLink to='about'>About</FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ='/'>
                            CC
                        </SocialLogo>
                        <WebsiteRights> Cameron Arnold © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/cameron.arnold.549436" target="_blank"
                            aria-label="Facebook">
                                    <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="//www.twitter.com/CarnoldCoding" target="_blank"
                            aria-label="Twitter">
                                    <FaTwitter/>
                            </SocialIconLink>

                            <SocialIconLink href="//www.linkedin.com/in/cameron-arnold-8b47281a0/" target="_blank"
                            aria-label="Linkedin">
                                    <FaLinkedin/>
                            </SocialIconLink>

                            <SocialIconLink href="//www.github.com/carnoldcoding" target="_blank"
                            aria-label="Github">
                                    <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
