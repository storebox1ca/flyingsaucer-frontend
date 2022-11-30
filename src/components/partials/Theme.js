import React from "react";
import styled from "styled-components";

function Header() {
    return ( 
        <HeaderDiv className="HeaderDiv">
            {/* Header */}
            <div className="container">
                {/* Header section */}
                <div className="d-flex justify-content-between align-items-center">
                    {/* Company logo */}
                    <HeaderLogo />
                    {/* Hamburger button */}
                    <HamBurger className="hamburger d-none d-sm-inline-block">Our Plans</HamBurger>
                    <div className="d-inline-block d-sm-none pt-2">
                        <span className="svg-icon svg-icon-min-white svg-icon-menu"></span>
                    </div>
                </div>
            </div>
        </HeaderDiv>
    );
}

function Navbar() {
    return ( 
        <NavbarDiv className="d-none d-sm-flex justify-content-center align-items-center">
            {/* Navbar */}
            <div className="text-black p-2">
                <span className="svg-icon svg-icon-min svg-icon-menu"></span>
                <span className="svg-icon svg-icon-min svg-icon-cart"></span>
                <span className="svg-icon svg-icon-min svg-icon-notification"></span>
            </div>
        </NavbarDiv>
    );
}


function Footer() {
    return ( 
        <FooterDiv>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-12 col-xl-5 text-start">
                        <label className="font-36 mb-4">Get in Touch</label>
                        <div className="input-group submit-box">
                            <input type="text" className="form-control submit-mail-left" placeholder="Enter your mail" />
                            <div className="input-group-append submit-mail-right d-flex justify-content-center align-items-center">
                                <svg className="svg-icon svg-icon-min svg-icon-chevrons-right"></svg>
                            </div>
                        </div>
                        <p className="mt-4 mb-5">Get your first meal box for free</p>
                    </div>
                    <div className="col-12 col-xl-7">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <ul className="footer-links">
                                    <li>
                                        <a href="*">Order Tracking</a>
                                    </li>
                                    <li>
                                        <a href="*">Our story</a>
                                    </li>
                                    <li>
                                        <a href="*">Help</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6">
                                <ul className="footer-links">
                                    <li>
                                        <a href="*">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="*">Terms</a>
                                    </li>
                                    <li>
                                        <a href="*">Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="w-100 d-flex">
                            <div className="float-left d-sm-inline-block">
                                <p className="text-light mt-3 pt-3">Copyright@floe All Rights Reserved</p>
                            </div>
                            <div className="mx-auto"></div>
                            <div className="float-right d-inline-block">
                                <div className="social-icon d-inline-block m-2">
                                    <img className="text-white" src="svgs/facebook 1.png" />
                                </div>
                                <div className="social-icon d-inline-block m-2">
                                    <img className="text-white" src="svgs/instagram 1.png" />
                                </div>
                                <div className="social-icon d-inline-block m-2">
                                    <img className="text-white" src="svgs/linkedin 1.png" />
                                </div>
                                <div className="social-icon d-inline-block m-2">
                                    <img className="text-white" src="svgs/twitter 1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FooterDiv>
    );
}

export default Header;
export { Footer, Navbar };

// Header
const HeaderDiv = styled.div`
    width: 100%;
    height: 143px;
    color: white;
    background: #000000;
    box-shadow: 0px -4px 12px rgba(165, 165, 165, 0.25);
    overflow: hidden;
`;

const HeaderLogo = styled.div`
    width: 221px;
    height: 63px;
    display: inline-block;
    background: url(Flying_saucer_logo.png);
`;

const HamBurger = styled.div`
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px 15px;
    z-index: 110;
`;

// Navbar
const NavbarDiv = styled.div`
    position: fixed;
    right: 0;
    width: 90px;
    padding: 8px;
    height: 100vh;
    z-index: 100;
`;

// Footer
const FooterDiv = styled.div`
    width: 100%;
    min-height: 397px;
    color: white;
    background: #000000;
    box-shadow: 0px -4px 12px rgba(165, 165, 165, 0.25);
`;