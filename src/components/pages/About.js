import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme";
import { SectionTwoTitle, SectionTwoDescription } from "../partials/HomeSections/HomeSectionTwo";

const About = () => {

    const crews = Array(9).fill(0);

    return (
        <div>
            <Navbar />

            <Header />
            
            {/* Container */}
            <div className="MinDiv MinHeight">

                <AboutBox style={{height: '54px'}}></AboutBox>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                <AboutBox>
                    <div className="minDiv-r-text-0">
                        <div className="row m-0">
                            <div className="col-12 col-xxl-7 p-0">
                                <div className="d-flex align-items-start h-100">
                                    <SectionOneTextBox className="h-100">
                                        <AboutArrowBackIcon/>
                                        <SectionOneTextBoxTitle>
                                            <AboutSectionTwoTitle className="text-uppercase">Flying Saucer who ?</AboutSectionTwoTitle>
                                        </SectionOneTextBoxTitle>
                                        
                                        <MinDivBorder style={{marginLeft: '0'}} />

                                        <SectionOneTextBoxText className="d-flex align-items-center">
                                            <AboutSectionTwoDescription>
                                                <span>What we eat matters.</span><br />
                                                <span>So is how it’s grown, sold & delivered.</span><br /><br />
                                                <span>We want to shoot down this broken food system and show the world what Indian’s can do with their food.</span>
                                            </AboutSectionTwoDescription>
                                        </SectionOneTextBoxText>
                                    </SectionOneTextBox>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-5 p-0">
                                <AboutImage1 />
                            </div>
                        </div>
                    </div>
                </AboutBox>
                
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
                            (p, index) => 
                                (
                                    <CrewItem key={index}>
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
                                    </CrewItem>
                                )
                            )
                        }
                    </SectionCrewGrid>
                }

                <MinDivBorder style={{marginLeft: '0', marginTop: '-1px', marginBottom: '2px'}} />
                
                <SectionAboutMarquee>
                    <Marquee style={{height: '94px', border: '1px solid'}} loop={0} speed={50} gradientColor={'none'}>
                        <div style={{margin: '18px 0'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            JOIN US! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div style={{margin: '18px 0'}}>
                            JOIN US! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div style={{margin: '18px 0'}}>
                            JOIN US! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div style={{margin: '18px 0'}}>
                            JOIN US! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        </div>
                        <div style={{margin: '18px 0'}}>
                            JOIN US!
                        </div>
                    </Marquee>
                </SectionAboutMarquee>
            </div>

            <Footer mindiv="full" />

        </div>
    );
}

export default About;

const light_theme_border_color = '#A9A9A9';

const AboutImage = styled.div`
    position: relative;
    width: 100%;
    background-repeat: no-repeat;
`;

const AboutImage1 = styled(AboutImage)`
    min-height: calc(100vw / 1.3);
    background-size: contain;
    background-position: bottom;
    background-image: url('images/Rectangle 3038 about.png');

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

const AboutBox = styled.div`
    margin-left: 70px;
    border-left: 1px solid ${light_theme_border_color};
`;

const AboutSectionTwoTitle = styled.div`
    color: #111111;
    font-size: 56px;
    font-weight: 700;
    font-family: Poppins Bold;
`;

const AboutSectionTwoDescription = styled.div`
    color: #111111;
    font-size: 24px;
    line-height: 150%;
    font-weight: 500;
    font-family: Poppins Medium;
`;

const AboutArrowBackIcon = styled.div`
    background: url(svgs/arrow_back.svg);
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    
    border: 1px solid black;
    border-radius: 50%;
    height: 50px;
    width: 50px;

    margin-left: 10px;
    margin-top: 17px;
`;

const SectionTwoTextBox = styled.div`
    // margin-top: 40px; 
    margin-bottom: 50px; 
`;

const SectionOneTextBox = styled(SectionTwoTextBox)`
    margin-left: -70px;
    width: calc(100% + 70px);

    @media (min-width: 1400px)
    {
        // padding-right: 20px;
    }
`;

const SectionOneTextBoxTitle = styled.div`
    padding-left: 110px;
    padding-right: 40px;
`;

const SectionOneTextBoxText = styled(SectionOneTextBoxTitle)`
    height: calc(100% - 84px);
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

const CrewItem = styled.div`
    border-bottom: 1px solid;
    border-color: black;
    border-right: 1px solid;
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

const SectionAboutMarquee = styled.div`
    background-color: #8AB48E;
    color: white;
    font-weight: 400;
    font-size: 36px;
    line-height: 54px;
`;