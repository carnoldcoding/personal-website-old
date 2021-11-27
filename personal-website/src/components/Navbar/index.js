import React from 'react'
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return (
        <>

            <Nav>
                <NavbarContainer>
                    {/* <NavLogo to="/">
                        CC
                    </NavLogo> */}
                    <MobileIcon onClick = {toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" 
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="resume"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>Resume</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/contact">Contact</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar