import React from "react";
import styled from "styled-components";

import Header, { Footer, Navbar } from "../partials/Theme";
import { SectionTwoTitle, SectionTwoDescription } from "../partials/HomeSections/HomeSectionTwo";
import { MinDivBorder } from "../partials/CommonSections";

const About = () => {
    return (
        <div>
            <Navbar />

            <Header />
            
            {/* Container */}
            <div className="MinDiv" style={{minHeight: 'calc(100vh - 149px)', backgroundColor: '#EEEBE6', borderRight: '1px solid #000000'}}>
                
                <div className="minDiv-r-text-0">
                    <div className="row">
                        <div className="col-12 col-xxl-6 mb-5 mb-xxl-0">
                            <div className="minDiv-text" style={{marginTop: '40px', marginBottom: '40px', paddingRight: '20px'}}>
                                <SectionTwoTitle>Flying Saucer who ?</SectionTwoTitle>
                                <SectionTwoDescription>
                                    We are Flying Saucer aims to cherish everything that’s healthy and delicious. Whether it’s Salmon from North Atlantic to Avocados straight from Mexico, We’d like to bond with good, conveneient food even when the aliens arrive!
                                </SectionTwoDescription>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6">
                            <div className="d-flex justify-content-end">
                                <AboutImage1 />
                            </div>
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />

                <div className="minDiv-text">
                    <div className="row">
                        <div className="col-12">
                            <div style={{marginTop: '50px', marginBottom: '50px'}}>
                                <SectionTwoTitle>Why go sub zero ?</SectionTwoTitle>
                                <SectionTwoDescription>
                                    Properly Frozen Food at -18° C helps fight food wastage & locks in more nutrition. Without the need for any preservatives or loss of flavour, Properly Frozen Food at -18° C helps fight food wastage & locks in more nutrition. Without the need for any preservatives or loss of flavour
                                </SectionTwoDescription>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                <div className="minDiv-l-text-0">
                    <div className="row">
                        <div className="col-12 col-xxl-6">
                            <div className="d-flex justify-content-end">
                                <AboutImage2 />
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6 mb-5 mb-xxl-0">
                            <div className="minDiv-text" style={{marginTop: '40px', paddingLeft: '20px'}}>
                                <SectionTwoTitle>Who we are.</SectionTwoTitle>
                                <SectionTwoDescription>
                                    A brand with character and clear vision is a brand with personality. Our personality? Heroes & creators! Do you have what it takes to change the world?
                                </SectionTwoDescription>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />

                <Footer />
            </div>
        </div>
    );
}

export default About;

const AboutImage1 = styled.div`
    position: relative;
    min-width: 100%;
    min-height: 493px;
    width: 100%;
    // max-height: 950px;
    background-image: url('images/Rectangle 3058.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const AboutImage2 = styled.div`
    position: relative;
    min-width: 100%;
    min-height: 493px;
    width: 100%;
    // max-height: 950px;
    background-image: url('images/Rectangle 3059.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;