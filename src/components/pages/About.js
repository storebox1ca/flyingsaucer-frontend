import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Header, { Footer, Navbar, MinDivBorder, SectionTwoTitle, SectionTwoDescription } from "../partials/Theme";

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
                    <div className="">
                        <div className="row m-0">
                            <div className="col-12 col-xxl-7 p-0">
                                <div className="d-flex align-items-start h-100">
                                    <SectionOneTextBox className="h-100">
                                        <SectionOneTextBoxTitle>
                                            <div className="d-flex align-items-center h-100">
                                                <AboutArrowBackIcon/>
                                                <AboutSectionTwoTitle className="text-uppercase minDiv-text-page">Flying Saucer who ?</AboutSectionTwoTitle>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <AboutYellowIcon />
                                            </div>
                                        </SectionOneTextBoxTitle>
                                        
                                        <MinDivBorder style={{marginLeft: '0'}} />

                                        <SectionOneTextBoxText className="d-flex align-items-center">
                                            <AboutSectionTwoDescription className="minDiv-text-page">
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

                <AboutBox>
                    <div className="">
                        <div className="row m-0">
                            <div className="col-12 col-xxl-7 p-0">
                            </div>
                            <div className="col-12 col-xxl-5 p-0">
                                <div className="d-flex justify-content-center align-items-center" style={{height: '120px'}}>
                                    <span style={{fontSize: '32px', fontFamily: 'Poppins Bold', color: '#000000'}}>Our Identity</span>
                                </div>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-12 col-xxl-5 p-0">
                                <div className="d-flex justify-content-center h-100">
                                    <div className="d-flex align-content-around flex-wrap h-100 minDiv-text-page" style={{maxWidth: '350px'}}>
                                        <AboutSectionTwoLeftText style={{color: '#2C488E'}}>Food</AboutSectionTwoLeftText>
                                        <AboutSectionTwoLeftText>Marketplace</AboutSectionTwoLeftText>
                                        <AboutSectionTwoLeftText>Delivery</AboutSectionTwoLeftText>
                                    </div>
                                </div>
                                {/* <SectionTwoTextBox>
                                    <SectionTwoTitle>Why go sub zero ?</SectionTwoTitle>
                                </SectionTwoTextBox> */}
                            </div>
                            <div className="col-12 col-xxl-7 p-0">
                                <AboutSectionTwoRight>
                                    <div className="minDiv-text-page">
                                        <AboutSectionTwoRightText>
                                            <span>A gourmet imported frozen food store for an at-home fine dining experience</span>
                                        </AboutSectionTwoRightText>
                                        <AboutSectionTwoRightText>
                                            <span>D2C & Retail that’s fair, fast and secure for everyone involved.</span> <br/><span>And of course, doesn’t exploit your attention to make you buy more than you need.</span>
                                        </AboutSectionTwoRightText>
                                        <AboutSectionTwoRightText>
                                            <span>We are building better ways to store & move food, so that we stay low on emissions, even if we’re bringing Peruvian Avocados or Ramen from Korea.</span>
                                        </AboutSectionTwoRightText>
                                    </div>
                                </AboutSectionTwoRight>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-12 p-0">
                                <div className="d-flex justify-content-center align-items-center" style={{height: '120px'}}>
                                    <span style={{fontSize: '32px', fontFamily: 'Poppins Bold', color: '#000000'}}>Why go sub zero ?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutBox>
                
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
                    <Marquee style={{height: '43px', overflow: 'hidden'}} loop={0} speed={50} gradientColor={'none'}>
                        {[...Array(10).keys()].map
                            ((x, index, arr) => 
                                (
                                    <AboutMarquee key={x} style={{}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        JOIN US! {index != (arr.length - 1) && [...Array(10)].map((i, i_index) => (<span key={i_index}>&nbsp;</span>))}
                                    </AboutMarquee>
                                )
                            )
                        }
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
        background-position: center top;
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
    z-index: 1;
`;

const AboutSectionTwoDescription = styled.div`
    color: #111111;
    font-size: 24px;
    line-height: 150%;
    font-weight: 500;
    font-family: Poppins Medium;
    padding: 40px 0;
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

    margin-left: -62px;
`;

const AboutYellowIcon = styled.div`
    position: absolute;
    background-color: #F5A130;
    border-radius: 50%;
    height: 96px;
    width: 96px;
    margin-top: -43px;
`;

const AboutSectionTwoLeftText = styled.div`
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    font-family: Poppins Bold;
    color: #959595;
`;

const AboutSectionTwoRight = styled.div` 
    border: 1px solid ${light_theme_border_color};
    border-right: 0;
`;

const AboutSectionTwoRightText = styled.div` 
    font-family: Poppins Regular;
    font-size: 16px;
    line-height: 32px;
    font-weight: 400;
    color: #111111;
    padding: 24px 0;
`;

const SectionTwoTextBox = styled.div`
    // margin-top: 40px; 
    // margin-bottom: 50px; 
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
    padding-left: 70px;
    padding-right: 40px;
    height: 96px;
`;

const SectionOneTextBoxText = styled(SectionOneTextBoxTitle)`
    height: calc(100% - 96px);
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
    background-color: #F9A83B;
    margin-bottom: 22px;
`;

const AboutMarquee = styled.div`
    margin: 8px 0;
    color: white;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    font-family: Poppins SemiBold;
`;