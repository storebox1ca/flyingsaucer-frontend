import React from "react";
import styled from "styled-components";

import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme";
import { SectionTwoTitle, SectionTwoDescription } from "../partials/HomeSections/HomeSectionTwo";

const About = () => {

    const crews = Array(9).fill(0);

    return (
        <div>
            <Navbar />

            <Header />
            
            {/* Container */}
            <div className="MinDiv" style={{minHeight: 'calc(100vh - 149px)', backgroundColor: '#EEEBE6', borderRight: '1px solid #000000'}}>
                
                <div className="minDiv-r-text-0">
                    <div className="row">
                        <div className="col-12 col-xxl-6">
                            <div className="d-flex align-items-center h-100">
                                <SectionOneTextBox className="minDiv-text">
                                    <SectionTwoTitle>Flying Saucer who ?</SectionTwoTitle>
                                    <SectionTwoDescription>
                                        We are Flying Saucer aims to cherish everything that’s healthy and delicious. Whether it’s Salmon from North Atlantic to Avocados straight from Mexico, We’d like to bond with good, conveneient food even when the aliens arrive!
                                    </SectionTwoDescription>
                                </SectionOneTextBox>
                            </div>
                        </div>
                        <div className="col-12 col-xxl-6">
                            <AboutImage1 />
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />

                <div className="minDiv-text">
                    <div className="row">
                        <div className="col-12">
                            <SectionTwoTextBox>
                                <SectionTwoTitle>Why go sub zero ?</SectionTwoTitle>
                                <SectionTwoDescription>
                                    Properly Frozen Food at -18° C helps fight food wastage & locks in more nutrition. Without the need for any preservatives or loss of flavour, Properly Frozen Food at -18° C helps fight food wastage & locks in more nutrition. Without the need for any preservatives or loss of flavour
                                </SectionTwoDescription>
                            </SectionTwoTextBox>
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                <div className="minDiv-l-text-0">
                    <div className="row">
                        <div className="col-12 col-xxl-6">
                            <AboutImage2 />
                        </div>
                        <div className="col-12 col-xxl-6">
                            <div className="d-flex align-items-center h-100">
                                <SectionThreeTextBox className="minDiv-text">
                                    <SectionTwoTitle>Who we are.</SectionTwoTitle>
                                    <SectionTwoDescription>
                                        A brand with character and clear vision is a brand with personality. Our personality? Heroes & creators! Do you have what it takes to change the world?
                                    </SectionTwoDescription>
                                </SectionThreeTextBox>
                            </div>
                        </div>
                    </div>
                </div>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                <SectionCrewHead className="text-center">Meet the crew.</SectionCrewHead>

                <MinDivBorder style={{marginLeft: '0'}} />

                { crews &&
                    <SectionCrewGrid>
                        {crews.map(
                            p => 
                                (
                                    <Item>
                                        <div className="w-100">
                                            <img src="images/Rectangle 3075.png" width="250px" height="250px" alt="" />
                                        </div>
                                        <div className="w-100 py-3" style={{borderBottom: '1px solid', borderTop: '1px solid', marginTop: '20px'}}>
                                            <div className="px-3">Co-founder & Executive Board</div>
                                        </div>
                                        <div>
                                            <SectionCrewTitle className="py-3">Dwayne Johnson </SectionCrewTitle>
                                            <SectionCrewDescription className="pb-2">“Properly Frozen Food at -18° C helps fight food wastage & locks in more nutrition. Without the need for any preservatives or loss of flavour ”</SectionCrewDescription>
                                        </div>
                                    </Item>
                                )
                            )
                        }
                    </SectionCrewGrid>
                }

                <Footer />
            </div>
        </div>
    );
}

export default About;


const AboutImage = styled.div`
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
`;

const AboutImage1 = styled(AboutImage)`
    min-height: calc(100vw / 1.3);
    background-size: contain;
    background-position: bottom;
    background-image: url('images/Rectangle 3058.png');

    @media (min-width: 768px)
    {
        min-height: 500px;
        background-size: cover;
        background-position: center;
    }
`;

const AboutImage2 = styled(AboutImage)`
    min-height: calc(100vw / 1.65);
    background-size: contain;
    background-position: top;
    background-image: url('images/Rectangle 3059.png');

    @media (min-width: 768px)
    {
        min-height: 500px;
        background-size: cover;
        background-position: center;
    }
`;

const SectionTwoTextBox = styled.div`
    margin-top: 40px; 
    margin-bottom: 50px; 
`;

const SectionOneTextBox = styled(SectionTwoTextBox)`
    @media (min-width: 1400px)
    {
        padding-right: 20px;
    }
`;

const SectionThreeTextBox = styled(SectionTwoTextBox)`
    @media (min-width: 1400px)
    {
        padding-left: 20px;
    }
`;

const SectionCrewHead = styled.div`
    font-weight: 800;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
    margin: 50px;
`;

const SectionCrewGrid = styled.div`
    display: grid;
    grid-template-columns: auto;

    @media (min-width: 768px)
    {
        grid-template-columns: auto auto;
    }

    @media (min-width: 1200px)
    {
        grid-template-columns: auto auto auto;
    }
`;

const Item = styled.div`
    border-bottom: 1px solid;
    border-color: black;
    border-left: 1px solid;
    padding: 20px 0;
    font-size: 30px;
    text-align: center;
`;

const SectionCrewTitle = styled.div`
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    padding: 0 20px;
`;

const SectionCrewDescription = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    padding: 0 20px;
`;