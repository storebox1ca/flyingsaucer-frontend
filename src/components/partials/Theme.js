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
                <HeaderLogo to="/" className="d-flex align-items-center">
                    <div>Flying Saucer</div>
                </HeaderLogo>

                <div className="d-flex justify-content-end align-items-center">
                    <div className="d-none d-lg-inline-block mx-3">
                        {/* Hamburger button */}
                        <HamSearch className="d-flex align-items-center">
                            <HamSearchText />Search / Track Order
                        </HamSearch>
                    </div>
                    
                    <span className="svg-icon svg-icon-local-mall mx-3"></span>
                    <span className="svg-icon svg-icon-person mx-3"></span>

                    <div className="d-inline-block d-md-none pt-2">
                        <span onClick={()=>showSidebar()} className="svg-icon svg-icon-min svg-icon-menu mx-3 svg-white"></span>
                    </div>
                </div>
            </div>
        </HeaderDiv>
    );
}

function Navbar() {

    // const [navSideWidth, setNavSideWidth] = useState('150px');
    // const [navSideWidth, setNavSideWidth] = useState('101px');

    // const [newStyleText, setnewStyleText] = useState(0);

    // const new_style = {
    //     '@media (max-width: 575px)':
    //     {
    //         maxWidth : 0
    //     }
    // }
    
    // const toggleSidebar = () => {
    //     if (navSideWidth == '101px')
    //     {
    //         showSidebar();
    //         setNavSideWidth('280px');

    //         setnewStyleText(1);
    //     } else {
    //         hideSidebar();
    //         setNavSideWidth('101px');

    //         setnewStyleText(0);
    //     }
    // }
    
    // const hideSidebar = () => {
    //     document.getElementById('lgMenu').classList.remove("lgMenu-enter");
    //     document.getElementById('lgMenu').classList.add("lgMenu-notenter");
    // }

    
    // const showSidebar = () => {
    //     document.getElementById('lgMenu').classList.remove("lgMenu-notenter");
    //     document.getElementById('lgMenu').classList.add("lgMenu-enter");
    // }

    return ( 
        <NavbarDiv className="d-flex align-items-end">
        {/* <NavbarDiv className="d-none d-sm-flex justify-content-center align-items-center"> */}
            {/* Navbar */}
            {/* <div className="d-flex align-items-start flex-column text-black text-center" style={{height: '100%', width: navSideWidth , new_style, transition: 'all 0.5s'}}>
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
            </div> */}
            <div className="w-100">
                <NavItemBox className="w-100">
                    <div className="d-flex align-items-center h-100">
                        <NavItemText className="w-100 text-center">Vegetarian</NavItemText>
                    </div>
                </NavItemBox>
                <NavItemBox className="w-100">
                    <div className="d-flex align-items-center h-100">
                        <NavItemText className="w-100 text-center">Meat</NavItemText>
                    </div>
                </NavItemBox>
                <NavItemBox className="w-100">
                    <div className="d-flex align-items-center h-100">
                        <NavItemText className="w-100 text-center">Seafood</NavItemText>
                    </div>
                </NavItemBox>
                <NavItemBox className="w-100">
                    <div className="d-flex align-items-center h-100">
                        <NavItemText className="w-100 text-center">Dessert</NavItemText>
                    </div>
                </NavItemBox>
                <NavItemBox className="w-100">
                    <div className="d-flex align-items-center h-100">
                        <NavItemText className="w-100 text-center active">View all</NavItemText>
                    </div>
                </NavItemBox>
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
        <div></div>
        // <SectionSidebar id="lgMenu" className="lgMenu-notenter">
        //     <div className="d-flex justify-content-end w-100" style={{position: 'absolute', padding: '35px 30px'}}>
        //         <span onClick={()=>hideSidebar()} className="svg-icon svg-icon-min svg-icon-cross"></span>
        //     </div>
        //     <div className="d-flex justify-content-center align-items-center h-100" style={{padding: '0 50px'}}>
        //         <div className="d-flex align-items-start flex-column h-100" style={{width: '250px'}}>
        //             <div className="mb-auto"></div>
        //             <ul style={{listStyleType: 'none'}}>
        //                 <li className="py-5">
        //                     <NavLink to="/about" className="text-black" onClick={()=>hideSidebar()}>
        //                         <span className="svg-icon svg-icon-min svg-icon-cart" style={{padding:'0px 0', marginLeft: '14px'}}>
        //                             <span style={{marginLeft: '53px', fontSize: '21px'}}>Cart</span>
        //                         </span>
        //                     </NavLink>
        //                 </li>
        //                 <li className="py-5">
        //                     <NavLink to="/notifications" className="text-black" onClick={()=>hideSidebar()}>
        //                         <span className="svg-icon svg-icon-min svg-icon-notification" style={{padding:'0px 0', marginLeft: '14px'}}>
        //                             <span style={{marginLeft: '53px', fontSize: '21px', transition: 'all 0.5s'}}>Notifications</span>
        //                         </span>
        //                         </NavLink>
        //                 </li>
        //                 <li className="py-4">
        //                     <NavLink to="/chatbot" className="text-black" onClick={()=>hideSidebar()}>
        //                         <span className="svg-icon svg-icon-mid svg-icon-aqua" style={{margin: '0', padding:'15px 0'}}>
        //                             <span style={{marginLeft: '67px', fontSize: '21px', transition: 'all 0.5s'}}>Chat</span>
        //                         </span>
        //                     </NavLink>
        //                 </li>
        //             </ul>
        //             <div className="mt-auto w-100 text-center" style={{padding: '26px'}} onClick={()=>hideSidebar()}>
        //                 <span className="svg-icon-mid" style={{fontSize: '20px'}}>FAQs</span>
        //             </div>
        //         </div>
        //     </div>
        // </SectionSidebar>
    );
}


function Footer({mindiv}) {
    return ( 
        <FooterDiv>
            {/* {mindiv && mindiv == 'full' ?
                <MinDivBorderFull style={{marginTop: '2px'}}/>
            :
                <MinDivBorder className="mt-5"/>
            } */}
            {/* <div className="minDiv-text">
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
            </div> */}
            {/* {mindiv && mindiv == 'full' ?
                <MinDivBorderFull className="mt-5"/>
            :
                <MinDivBorder className="mt-5"/>
            } */}
            {/* <div className="py-4">
                <SectionCopyRightText className="text-center">Copyright@floe All Rights Reserved</SectionCopyRightText>
            </div> */}
            <div className="row m-0" style={{borderBottom: '1px solid #A9A9A9'}}>
                <FooterCol className="col-12 col-lg-12 col-xxl-5 p-0" style={{borderLeft: '1px solid #A9A9A9', borderTop: '1px solid #A9A9A9'}}>
                    <FooterColTitle className="minDiv-text">Tales from outer space</FooterColTitle>
                    <FooterColBody className="minDiv-text">
                        <FooterColText>Once in a while, we’ll fly by.</FooterColText>
                        <FooterColTextLight>
                            <div>No false sales, ads & discount. <br/>No email marketing. No Newsletters.</div>
                        </FooterColTextLight>
                    </FooterColBody>
                </FooterCol>
                <FooterCol className="col-12 col-md-6 col-xxl-4 p-0" style={{borderLeft: '1px solid #A9A9A9', borderTop: '1px solid #A9A9A9'}}>
                    <FooterColTitle className="minDiv-text">Work with us</FooterColTitle>
                    <FooterColBody className="minDiv-text">
                        <FooterColText>kitchens</FooterColText>
                        <FooterColText>investors</FooterColText>
                        <FooterColText>careers</FooterColText>
                        <FooterColText>cold chain</FooterColText>
                        <FooterColText>sustainability</FooterColText>
                    </FooterColBody>
                </FooterCol>
                <FooterCol className="col-12 col-md-6 col-xxl-3 p-0" style={{borderLeft: '1px solid #A9A9A9', borderTop: '1px solid #A9A9A9'}}>
                    <FooterColTitle className="minDiv-text">quick links</FooterColTitle>
                    <FooterColBody className="minDiv-text">
                        <FooterColText>gifts</FooterColText>
                        <FooterColText>shop</FooterColText>
                        <FooterColText>the ticket</FooterColText>
                        <FooterColText>FAQ’s</FooterColText>
                    </FooterColBody>
                </FooterCol>
            </div>
            <div className="minDiv-text">
                <div className="d-flex flex-column-reverse flex-lg-row d-lg-flex justify-content-center justify-content-lg-between align-items-center w-100">
                    <div className="d-block d-md-inline-block w-100 py-3">
                        <div className="d-flex justify-content-center justify-content-lg-start w-100">
                            <FooterCopyrightText>The Flying Saucer Project</FooterCopyrightText>
                        </div>
                    </div>
                    <div className="d-block d-md-inline-block">
                        <div className="d-flex justify-content-between">
                            <FooterCopyrightText className="py-3">Whitepaper</FooterCopyrightText>
                            <FooterCopyrightText className="p-3">Whatsapp</FooterCopyrightText>
                            <FooterCopyrightText className="py-3">LinkedIn</FooterCopyrightText>
                        </div>
                    </div>
                </div>
            </div>
        </FooterDiv>
    );
}

export default Header;
export { Footer, Navbar, Sidebar }; 


const dark_head_color = '#838181';
const dark_theme_bg_color = '#838181';
const dark_theme_border_color = '#EEEBE6';

const light_head_color = '#2C488E';
const light_theme_bg_color = '#EEEBE6';
const light_theme_border_color = '#A9A9A9';

const SectionSidebar = styled.div`
    position: fixed;
    right: 0;
    background-color: ${light_theme_bg_color};
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


const FooterLast = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #111111;

    @media screen and (max-width: 575px)
    {
        padding: 0 30px;
    }
    @media (min-width: 576px) and (max-width: 991px)
    {
        padding: 5px 50px;
    }
    @media (min-width: 992px)
    {
        padding: 7px 100px;
    }
`;

// Header
const HeaderDiv = styled.div`
    position: relative;
    width: 100%;
    color: white;
    background-color: ${light_head_color};
    box-shadow: 0px -4px 12px rgba(165, 165, 165, 0.25);
    overflow: hidden;
    // border-bottom: 1px solid #000000;
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
    height: 48px;
    display: inline-block;
    background: url(favicon2.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;

    padding: 0;
    padding-left: 70px;
    padding-right: 10px;

    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    color: white;
    line-height: 1;

    &:hover
    {
        color: white;
    }

    @media (min-width: 992px) and (max-width: 1199px)
    {
        font-size: 36px;
    }

    @media (min-width: 1200px)
    {
        font-size: 40px;
    }

`;

const HamSearch = styled.div`
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
    color: white;
    border: 1px solid #A4A4A4;
    padding: 7px 20px;
    z-index: 110;

    @media (min-width: 1200px)
    {
        width: 360px;
    }
`;

const HamSearchText = styled.div`
    background: url(svgs/search.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    height: 17px;
    width: 17px;
    display: inline-block;
    margin-right: 10px;
`;

// Navbar
const NavbarDiv = styled.div`
    background-color: ${light_theme_bg_color};
    position: fixed;
    right: 0;
    height: 100vh;
    height: -webkit-fill-available;
    border-left: 1px solid ${light_theme_border_color};
    z-index: 10000;
    width: 0;

    span 
    {
        margin-top: 13px;
        margin-bottom: 10px;
        font-weight: 400;
    }

    @media (min-width: 768px)
    {
        width: 151px;
    }

`;

// Footer
const FooterDiv = styled.div`
    width: 100%;
    min-height: 330px;
    background: ${light_theme_bg_color};
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

const MinDivBorder = styled.div`
    margin-left: 30px;
    margin-right: 30px;
    border-top: 1px solid ${light_theme_border_color};

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
    border-top: 1px solid ${light_theme_border_color};
`;

const NavItemBox = styled.div`
    height: 70px;
    border-top: 1px solid ${light_theme_border_color};
`;

const NavItemText = styled.div`
    font-size: 16px;
    color: #111111;
    font-weight: 700;

    &.active
    {
        color: #F4A73F;
    }
`;

const FooterCol = styled.div`
    @media (min-width: 1610px)
    {
        width: calc(100% / 3);
    }
`;

const FooterColTitle = styled.div`
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
    color: #929292;
    padding-top: 17px;
    padding-bottom: 17px;
    border-bottom: 1px solid ${light_theme_border_color};

    @media (min-width: 768px)
    {
        font-size: 24px;
    }
`;

const FooterColBody = styled.div`  
    padding-top: 32px;
    padding-bottom: 32px;
`;

const FooterColText = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    padding: 4px 0;
    text-transform: capitalize;

    @media (min-width: 768px)
    {
        font-size: 24px;
    }
`;

const FooterColTextLight = styled.div`
    font-weight: 400;
    font-size: 12px;
    color: #373737;
    margin-top: 10px;

    @media (min-width: 768px)
    {
        font-size: 20px;
    }
`;

const FooterCopyrightText = styled.div`
    font-size: 12px;

    &:hover
    {
        color: blue;
    }

    @media (min-width: 768px)
    {
        font-size: 20px;
    }
`;

export { SectionCommonButton, MinDivBorder };