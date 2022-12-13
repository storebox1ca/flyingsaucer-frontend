import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom"

function Header() {
    
    const showSidebar = () => {
        document.getElementById('lgMenu').classList.remove("lgMenu-notenter");
        document.getElementById('lgMenu').classList.add("lgMenu-enter");
    }

    return ( 
        <HeaderDiv>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center" style={{height: '70px'}}>
                {/* Company logo */}
                <HeaderLogo to="/" />
                {/* Hamburger button */}
                <HamBurger className="hamburger d-none d-sm-inline-block">Enter Pincode</HamBurger>
                <div className="d-inline-block d-sm-none pt-2">
                    <span onClick={()=>showSidebar()} className="svg-icon svg-icon-min svg-icon-menu"></span>
                </div>
            </div>
        </HeaderDiv>
    );
}

function Navbar() {

    const [navSideWidth, setNavSideWidth] = useState('101px');

    const [newStyleText, setnewStyleText] = useState(0);

    const new_style = {
        '@media (max-width: 575px)':
        {
            maxWidth : 0
        }
    }
    
    const toggleSidebar = () => {
        if (navSideWidth == '101px')
        {
            showSidebar();
            setNavSideWidth('280px');

            setnewStyleText(1);
        } else {
            hideSidebar();
            setNavSideWidth('101px');

            setnewStyleText(0);
        }
    }
    
    const hideSidebar = () => {
        document.getElementById('lgMenu').classList.remove("lgMenu-enter");
        document.getElementById('lgMenu').classList.add("lgMenu-notenter");
    }

    
    const showSidebar = () => {
        document.getElementById('lgMenu').classList.remove("lgMenu-notenter");
        document.getElementById('lgMenu').classList.add("lgMenu-enter");
    }

    return ( 
        <NavbarDiv className="d-none d-sm-flex justify-content-center align-items-center">
            {/* Navbar */}
            <div className="d-flex align-items-start flex-column text-black text-center" style={{height: '100%', width: navSideWidth , new_style, transition: 'all 0.5s'}}>
                <div className="mb-auto"></div>
                <div style={{margin: '21px'}}>
                    <div>
                        {navSideWidth == '101px' ?
                            <span onClick={()=>toggleSidebar()} className="svg-icon svg-icon-min svg-icon-menu" style={{padding:'0px 0'}}>
                                <span style={{marginLeft: '53px', fontSize: '21px', opacity : newStyleText, transition: 'all 0.5s'}}>Menu</span>
                            </span>
                            : 
                            <span onClick={()=>toggleSidebar()} className="svg-icon svg-icon-min svg-icon-cross" style={{padding:'0px 0'}}>
                                <span style={{marginLeft: '53px', fontSize: '21px', opacity : newStyleText, transition: 'all 0.5s'}}>Close&nbsp;Menu</span>
                            </span>
                        }
                    </div>
                    <div>
                        <NavLink to="/about" className="text-black">
                            <span className="svg-icon svg-icon-min svg-icon-cart" style={{padding:'0px 0'}}>
                                <span style={{marginLeft: '53px', fontSize: '21px', opacity : newStyleText, transition: 'all 0.5s'}}>Cart</span>
                            </span>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/notifications" className="text-black">
                            <span className="svg-icon svg-icon-min svg-icon-notification" style={{padding:'0px 0'}}>
                                <span style={{marginLeft: '53px', fontSize: '21px', opacity : newStyleText, transition: 'all 0.5s'}}>Notifications</span>
                            </span>
                            </NavLink>
                    </div>
                    <div>
                        <NavLink to="/chatbot" className="text-black">
                            <span className="svg-icon svg-icon-mid svg-icon-aqua" style={{margin: '0', padding:'15px 0'}}>
                                <span style={{marginLeft: '67px', fontSize: '21px', opacity : newStyleText, transition: 'all 0.5s'}}>Chat</span>
                            </span>
                        </NavLink>
                    </div>
                </div>
                <div className="mt-auto w-100" style={{padding: '26px'}}>
                    <span className="svg-icon-mid" style={{fontSize: '20px'}}>FAQs</span>
                </div>
            </div>
        </NavbarDiv>
    );
}


function Sidebar() {
    
    const hideSidebar = () => {
        document.getElementById('lgMenu').classList.remove("lgMenu-enter");
        document.getElementById('lgMenu').classList.add("lgMenu-notenter");
    }

    return ( 
        <SectionSidebar id="lgMenu" className="lgMenu-notenter">
            <div className="d-flex justify-content-end w-100" style={{position: 'absolute', padding: '35px 30px'}}>
                <span onClick={()=>hideSidebar()} className="svg-icon svg-icon-min svg-icon-cross"></span>
            </div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="d-flex align-items-start flex-column h-100" style={{width: '250px'}}>
                    <div className="mb-auto"></div>
                    <ul style={{listStyleType: 'none'}}>
                        <li className="py-5">
                            <NavLink to="/about" className="text-black">
                                <span className="svg-icon svg-icon-min svg-icon-cart" style={{padding:'0px 0', marginLeft: '14px'}}>
                                    <span style={{marginLeft: '53px', fontSize: '21px'}}>Cart</span>
                                </span>
                            </NavLink>
                        </li>
                        <li className="py-5">
                            <NavLink to="/notifications" className="text-black">
                                <span className="svg-icon svg-icon-min svg-icon-notification" style={{padding:'0px 0', marginLeft: '14px'}}>
                                    <span style={{marginLeft: '53px', fontSize: '21px', transition: 'all 0.5s'}}>Notifications</span>
                                </span>
                                </NavLink>
                        </li>
                        <li className="py-4">
                            <NavLink to="/chatbot" className="text-black">
                                <span className="svg-icon svg-icon-mid svg-icon-aqua" style={{margin: '0', padding:'15px 0'}}>
                                    <span style={{marginLeft: '67px', fontSize: '21px', transition: 'all 0.5s'}}>Chat</span>
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="mt-auto w-100 text-center" style={{padding: '26px'}}>
                        <span className="svg-icon-mid" style={{fontSize: '20px'}}>FAQs</span>
                    </div>
                </div>
            </div>
        </SectionSidebar>
    );
}


function Footer({mindiv}) {
    return ( 
        <FooterDiv>
            {mindiv && mindiv == 'full' ?
                <MinDivBorderFull style={{marginTop: '2px'}}/>
            :
                <MinDivBorder className="mt-5"/>
            }
            <div className="minDiv-text">
                <div className="row pt-5 pb-4">
                    <div className="col-12 col-lg-4 col-xl-5 text-start mb-4 m-md-0">
                        <HeaderLogo to="/" className="mb-3" />
                        <SectionEmailText>flyingsaucer@gmail.com</SectionEmailText>
                        
                        <div className="mt-4">
                            <div className="social-icon d-inline-block" style={{marginRight: '5px'}}>
                                <img className="text-white" src="svgs/facebook 1.png" alt="facebook_icon" />
                            </div>
                            <div className="social-icon d-inline-block mx-1">
                                <img className="text-white" src="svgs/instagram 1.png" alt="instagram_icon" />
                            </div>
                            <div className="social-icon d-inline-block mx-1">
                                <img className="text-white" src="svgs/linkedin 1.png" alt="linkedin_icon" />
                            </div>
                            <div className="social-icon d-inline-block mx-1">
                                <img className="text-white" src="svgs/twitter 1.png" alt="twitter_icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 col-xl-7">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <ul className="footer-links">
                                    <SectionDivli>
                                        <SectionDivliA href="*">Order Tracking</SectionDivliA>
                                    </SectionDivli>
                                    <SectionDivli>
                                        <SectionDivliA href="*">Our story</SectionDivliA>
                                    </SectionDivli>
                                    <SectionDivli>
                                        <SectionDivliA href="*">Help</SectionDivliA>
                                    </SectionDivli>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6">
                                <ul className="footer-links">
                                    <SectionDivli>
                                        <SectionDivliA href="*">FAQ's</SectionDivliA>
                                    </SectionDivli>
                                    <SectionDivli>
                                        <SectionDivliA href="*">Terms</SectionDivliA>
                                    </SectionDivli>
                                    <SectionDivli>
                                        <SectionDivliA href="*">Privacy</SectionDivliA>
                                    </SectionDivli>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {mindiv && mindiv == 'full' ?
                <MinDivBorderFull className="mt-5"/>
            :
                <MinDivBorder className="mt-5"/>
            }
            <div className="py-4">
                <SectionCopyRightText className="text-center">Copyright@floe All Rights Reserved</SectionCopyRightText>
            </div>
        </FooterDiv>
    );
}

export default Header;
export { Footer, Navbar, Sidebar }; 

const SectionSidebar = styled.div`
    position: fixed;
    right: 0;
    background-color: #EEEBE6;
    border-left: 1px solid #000000;
    height: 100%;
    z-index: 10200;
    overflow:hidden;
    box-shadow: 5px 5px 10px grey;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;

    &.lgMenu-notenter{
      width: 0;
    }
    
    &.lgMenu-enter{
      width: 100%;

      @media (min-width: 575px)
      {
        width: 0;
      }
    }
`;


// Header
const HeaderDiv = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background-color: #EEEBE6;
    box-shadow: 0px -4px 12px rgba(165, 165, 165, 0.25);
    overflow: hidden;
    border-bottom: 1px solid #000000;
    z-index: 10100;

    @media screen and (max-width: 575px)
    {
        padding: 15px 30px;
    }
    @media (min-width: 576px) and (max-width: 991px)
    {
        padding: 15px 50px;
    }
    @media (min-width: 992px)
    {
        padding: 15px 100px;
    }
`;

const HeaderLogo = styled(NavLink)`
    width: 170px;
    height: 48px;
    display: inline-block;
    background: url(Flying_saucer_logo.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &:hover
    {
        width: 173px;
        height: 50px;
    }
`;

const HamBurger = styled.div`
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
    border: 1px solid #000000;
    padding: 12px 32px;
    z-index: 110;
`;

// Navbar
const NavbarDiv = styled.div`
    background-color: #EEEBE6;
    position: fixed;
    right: 0;
    height: 100vh;
    height: -webkit-fill-available;
    border-left: 1px solid #000000;
    z-index: 10000;

    span 
    {
        margin-top: 13px;
        margin-bottom: 10px;
        font-weight: 400;
    }
`;

// Footer
const FooterDiv = styled.div`
    width: 100%;
    min-height: 330px;
    background: #EEEBE6;
`;

const SectionCopyRightText = styled.div`
    color: #000000;
    font-weight: 400;
    font-size: 12px;

    @media (min-width: 768px)
    {
        font-size: 16px;
        line-height: 24px;
    }
`;

const SectionEmailText = styled.div`
    font-family: Poppins;
    color: #000000;
    font-weight: 400;
    font-size: 12px;

    @media (min-width: 768px)
    {
        font-size: 16px;
        line-height: 24px;
    }
`;

const SectionDivli = styled.li` 
  text-align: left;
  list-style-type: none;
  margin-bottom: 10px;

  @media (min-width: 768px)
  {
    margin-bottom: 30px;
  }
`;

const SectionDivliA = styled.a` 
    font-size: 16px;
    color: #000000;
    text-decoration: none;

    @media (min-width: 768px)
    {
        font-size: 24px;
        line-height: 24px;
    }

    &:hover
    { 
        text-decoration: underline;
    }
`;

const SectionCommonButton = styled.button`
    padding: 12px 45px;
    font-size: 16px;
    color: #ffffff;
    width: 200px;
    height: 48px;
    background: #000000;
    border-radius: 4px;
`;

// const MinDiv = styled.main`
//     min-height: calc(100vh - 143px - 397px);
//     max-width: calc(100vw - 100px);
//     left: 0;
//     border: 1px solid lightgrey;
//     border-left: 0;
//     border-bottom: 0;
//     border-top: 0;
//     overflow: hidden;
// `;

const MinDivBorder = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    border-top: 1px solid #000000;

    @media (min-width: 576px) and (max-width: 991px)
    {
        margin-left: 50px;
        margin-right: 0;
    }
    @media (min-width: 992px)
    {
        margin-left: 100px;
        margin-right: 0;
    }

`;

const MinDivBorderFull = styled.div`
    border-top: 1px solid #000000;
`;

export { SectionCommonButton, MinDivBorder };