import React, { useState} from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { NavLink } from "react-router-dom"

function Header() {
    return ( 
        <HeaderDiv>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center" style={{height: '70px'}}>
                {/* Company logo */}
                <HeaderLogo to="/" />
                {/* Hamburger button */}
                <HamBurger className="hamburger d-none d-sm-inline-block">Enter Pincode</HamBurger>
                <div className="d-inline-block d-sm-none pt-2">
                    <span className="svg-icon svg-icon-min svg-icon-menu"></span>
                </div>
            </div>
        </HeaderDiv>
    );
}

function Navbar() {

    return ( 
        <ThemeContext.Consumer>
        <NavbarDiv className="d-none d-sm-flex justify-content-center align-items-center">
            {/* Navbar */}
            <div className="d-flex align-items-end flex-column text-black text-center p-2" style={{height: '100%'}}>
                <div className="mb-auto"></div>
                <div className="">
                    <span onClick={ToggleSidebar} className="svg-icon svg-icon-min svg-icon-menu"></span>
                    <NavLink to="/about"><span className="svg-icon svg-icon-min svg-icon-cart"></span></NavLink>
                    <NavLink to="/notifications"><span className="svg-icon svg-icon-min svg-icon-notification"></span></NavLink>
                    <NavLink to="/chatbot"><span className="svg-icon svg-icon-mid svg-icon-aqua" style={{ marginBottom: '15px'}}></span></NavLink>
                </div>
                <div className="mt-auto">
                    <span className="svg-icon-mid" style={{fontSize: '20px'}}>FAQs</span>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebar == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Sidebar Header</h4>
                    <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times"></i></div>
                </div>
                <div className="sd-body">
                    <ul>
                        <li><a className="sd-link">Menu Item 1</a></li>
                        <li><a className="sd-link">Menu Item 2</a></li>
                        <li><a className="sd-link">Menu Item 3</a></li>
                        <li><a className="sd-link">Menu Item 4</a></li>
                        <li><a className="sd-link">Menu Item 5</a></li>
                        <li><a className="sd-link">Menu Item 6</a></li>
                        <li><a className="sd-link">Menu Item 7</a></li>
                        <li><a className="sd-link">Menu Item 8</a></li>
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isSidebarOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </NavbarDiv>
        </ThemeContext.Consumer>
    );
}


function Footer() {
    return ( 
        <FooterDiv>
            <MinDivBorder className="mt-5"/>
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
            <MinDivBorder className="mb-2" />
            <div className="py-4">
                <SectionCopyRightText className="mb-3 text-center">Copyright@floe All Rights Reserved</SectionCopyRightText>
            </div>
        </FooterDiv>
    );
}

export default Header;
export { Footer, Navbar }; 

// Header
const HeaderDiv = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background: #EEEBE6;
    box-shadow: 0px -4px 12px rgba(165, 165, 165, 0.25);
    overflow: hidden;
    border-bottom: 1px solid #000000;

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
    width: 100px;
    padding: 32px;
    height: 100vh;
    height: -webkit-fill-available;

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

export { SectionCommonButton, MinDivBorder };