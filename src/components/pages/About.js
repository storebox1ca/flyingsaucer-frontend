import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme";

const About = () => {

    const crews = Array(9).fill(0);

    return (
        <div>
            <Navbar />

            <Header />
            
            {/* Container */}

            <div className="MinDiv MinHeight">

                {/* Section One */}

                <AboutBox style={{height: '54px'}}></AboutBox>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                {/* Section Two */}

                <AboutBox>
                    <div className="">
                        <div className="row m-0">
                            <div className="col-12 col-xxl-7 p-0">
                                <div className="d-flex align-items-start h-100">
                                    <SectionOneTextBox className="h-100">
                                        <AboutSectionTwoTitleBox>
                                            <div className="d-flex align-items-center h-100">
                                                <AboutArrowBackIcon/>
                                                <AboutSectionTwoTitle className="text-uppercase minDiv-text-page">Flying Saucer who ?</AboutSectionTwoTitle>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <AboutYellowIcon />
                                            </div>
                                        </AboutSectionTwoTitleBox>
                                        
                                        <MinDivBorder style={{marginLeft: '0'}} />

                                        <AboutSectionTwoDescriptionBox className="d-flex align-items-center">
                                            <AboutSectionTwoDescription className="minDiv-text-page">
                                                <span>What we eat matters.</span><br />
                                                <span>So is how it’s grown, sold & delivered.</span><br /><br />
                                                <span>We want to shoot down this broken food system and show the world what Indian’s can do with their food.</span>
                                            </AboutSectionTwoDescription>
                                        </AboutSectionTwoDescriptionBox>
                                    </SectionOneTextBox>
                                </div>
                            </div>
                            <div className="col-12 col-xxl-5 p-0">
                                <AboutSectionTwoImage1 />
                            </div>
                        </div>
                    </div>
                </AboutBox>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                {/* Section Three */}

                <AboutBox>
                    <div className="">
                        <div className="row m-0">
                            <div className="col-12 col-xxl-7 p-0">
                                <SignupBadgeBoxProducts className="d-flex justify-content-center align-items-center">
                                    <SignupBadgeTextProducts>Sign up now!</SignupBadgeTextProducts>
                                </SignupBadgeBoxProducts>
                            </div>
                            <div className="col-12 col-xxl-5 p-0">
                                <AboutSectionThreeTopText className="d-flex justify-content-center align-items-center">
                                    <span>Our Identity</span>
                                </AboutSectionThreeTopText>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className="col-12 col-lg-5 col-xxl-5 p-0">
                                <div className="d-flex justify-content-center h-100">
                                    <div className="d-flex align-content-around flex-wrap h-100 minDiv-text-page py-4" style={{maxWidth: '350px'}}>
                                        <AboutSectionThreeLeftText style={{color: '#2C488E'}}>Food</AboutSectionThreeLeftText>
                                        <AboutSectionThreeLeftText>Marketplace</AboutSectionThreeLeftText>
                                        <AboutSectionThreeLeftText>Delivery</AboutSectionThreeLeftText>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 col-xxl-7 p-0">
                                <AboutSectionThreeRight>
                                    <div className="minDiv-text-page">
                                        <AboutSectionThreeRightText>
                                            <span>A gourmet imported frozen food store for an at-home fine dining experience</span>
                                        </AboutSectionThreeRightText>
                                        <AboutSectionThreeRightText>
                                            <span>D2C & Retail that’s fair, fast and secure for everyone involved.</span> <br/><span>And of course, doesn’t exploit your attention to make you buy more than you need.</span>
                                        </AboutSectionThreeRightText>
                                        <AboutSectionThreeRightText>
                                            <span>We are building better ways to store & move food, so that we stay low on emissions, even if we’re bringing Peruvian Avocados or Ramen from Korea.</span>
                                        </AboutSectionThreeRightText>
                                    </div>
                                </AboutSectionThreeRight>
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
                
                {/* Section Four */}
                
                <MinDivBorder style={{marginLeft: '0', marginTop: '105px'}} />

                <AboutBox style={{marginTop: '-105px'}}>
                    <div className="row m-0">
                        <AboutSectionFourBodyLeft className="col-12 col-lg-6">

                            <AboutSectionFourHeader>{'Fresh  (~0-12°C)'}</AboutSectionFourHeader>

                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-star-two"></AboutSectionFourIconBox>
                                Limited Freshness
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>A lot of produce spoils, decays and must be used quickly</AboutSectionFourDescription>
                            
                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-award-blank"></AboutSectionFourIconBox>
                                Compromised quality
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>Lengthy travel conditions often results in preservation through chemicals </AboutSectionFourDescription>
                            
                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-apple-blank"></AboutSectionFourIconBox>
                                Weakened Nutritional Value
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>Ambient temperature weakens overall nutritional value of fresh foods</AboutSectionFourDescription>
                            
                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-can-steam"></AboutSectionFourIconBox>
                                Promotes Food Waste
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>According to <u>multiple sources</u>, India waste’s over 50% of the fresh food it produces</AboutSectionFourDescription>

                            <div style={{height: '30px'}}></div>
                        </AboutSectionFourBodyLeft>

                        <AboutSectionFourBody className="col-12 col-lg-6">
                            <div style={{marginTop: '-2px', marginLeft: '-196px', marginRight: '-50px'}}>
                                <MinDivBorder style={{marginLeft: '0'}} />
                                <MinDivBorder style={{marginLeft: '0', marginTop: '105px'}} />
                                <AboutBox style={{marginTop: '-105px'}}>
                                    <AboutSectionFourBodyLeft>
                                        <AboutSectionFourHeader>{'Flash frozen (-20°C)'}</AboutSectionFourHeader>
                                    </AboutSectionFourBodyLeft>
                                </AboutBox>
                            </div>

                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-star-three"></AboutSectionFourIconBox>
                                Prolonged Freshness
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>When frozen at peak ripeness, it inhibits spoilage</AboutSectionFourDescription>

                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-award-checked"></AboutSectionFourIconBox>
                                Free of Preservatives
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>Use of flash frozen eliminates the need for any unwanted ingredient</AboutSectionFourDescription>

                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-apple-heart"></AboutSectionFourIconBox>
                                Guaranteed Nutrients
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>Freezing at peak ripeness locks in maximum nutrition. And there’s already enough research!</AboutSectionFourDescription>

                            <AboutSectionFourTitle>
                                <AboutSectionFourIconBox className="svg-icon svg-icon-about-s4 svg-icon-can-only"></AboutSectionFourIconBox>
                                Combats Food Waste
                            </AboutSectionFourTitle>
                            <AboutSectionFourDescription>Available data suggest frozen food can be cheaper in the long run too</AboutSectionFourDescription>

                            <div style={{height: '30px'}}></div>
                        </AboutSectionFourBody>
                    </div>
                </AboutBox>

                <MinDivBorder style={{marginLeft: '0'}} />

                {/* Section Five */}

                <AboutBox>
                    <div className="minDiv-Text-page text-center">
                        <AboutSectionFiveTitle>“ insufficient facts always invite danger “</AboutSectionFiveTitle>
                        <AboutSectionFiveSubTitle>{'Captain Spock (1967)'}</AboutSectionFiveSubTitle>
                        <AboutSectionFiveDescription>
                            So we’ll happily tell you how we check, taste, curate and deliver at great value.
                            <br/>
                            <br/>
                            Whether it’s food quality, privacy, emissions or how we sell. 
                            <br/>
                            Stay tuned for more!
                        </AboutSectionFiveDescription>
                    </div>
                </AboutBox>
                
                <MinDivBorder style={{marginLeft: '0'}} />
                
                {/* <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} /> */}

                <AboutBox style={{paddingBottom: '100px', paddingTop: '96px'}}>
                
                    <MinDivBorder style={{marginLeft: '0'}} />

                    <div className="row m-0">
                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <AboutSectionFourFirstCrew className="h-100">
                            </AboutSectionFourFirstCrew>

                        </AboutSectionFourBody>

                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <div className="h-100">
                                <MinDivBorder style={{marginLeft: '0'}} />
                                <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} />
                                <AboutBox>
                                    <AboutSectionFourBody className="h-100">

                                        <div style={{minHeight: '101px'}}></div>
                                        {/* <img /> */}

                                    </AboutSectionFourBody>
                                </AboutBox>
                            </div>
                        </AboutSectionFourBody>

                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <div className="h-100">
                                <MinDivBorder style={{marginLeft: '0'}} />
                                <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} />
                                <AboutBox>
                                    <AboutSectionFourBody className="h-100">

                                        <div style={{minHeight: '101px'}}></div>
                                        {/* <img /> */}
                                        
                                    </AboutSectionFourBody>
                                </AboutBox>
                            </div>
                        </AboutSectionFourBody>
                    </div>
                </AboutBox>
                
                <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} />

                <AboutBox style={{marginTop: '-97px', paddingBottom: '100px', paddingTop: '96px'}}>
                
                    <MinDivBorder style={{marginLeft: '0'}} />

                    <div className="row m-0">
                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <AboutSectionFourFirstCrew className="h-100" style={{height: '97px', marginLeft: '-126px', marginRight: '-50px'}}>
                            </AboutSectionFourFirstCrew>

                        </AboutSectionFourBody>

                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <div className="h-100" style={{marginTop: '-1px', marginLeft: '-196px', marginRight: '-50px'}}>
                                <MinDivBorder style={{marginLeft: '0'}} />
                                <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} />
                                <AboutBox style={{marginTop: '-97px', height: 'calc(100%)'}}>
                                    <AboutSectionFourBody className="h-100">

                                        <div style={{minHeight: '101px'}}></div>
                                        {/* <img /> */}

                                    </AboutSectionFourBody>
                                </AboutBox>
                            </div>
                        </AboutSectionFourBody>

                        <AboutSectionFourBody className="col-12 col-lg-4">
                            <div className="h-100" style={{marginTop: '-1px', marginLeft: '-196px', marginRight: '-50px'}}>
                                <MinDivBorder style={{marginLeft: '0'}} />
                                <MinDivBorder style={{marginLeft: '0', marginTop: '96px'}} />
                                <AboutBox style={{marginTop: '-97px', height: 'calc(100%)'}}>
                                    <AboutSectionFourBody className="h-100">

                                        <div style={{minHeight: '101px'}}></div>
                                        {/* <img /> */}
                                        
                                    </AboutSectionFourBody>
                                </AboutBox>
                            </div>
                        </AboutSectionFourBody>
                    </div>
                </AboutBox>

                <MinDivBorder style={{marginLeft: '0'}} />
                
                {/* Section Six */}
                
                <AboutBox>
                    <div className="d-flex justify-content-center">
                        <AboutSectionSixTitle className="minDiv-text-page">The Partner’s we couldn’t do without</AboutSectionSixTitle>
                    </div>
                    <div className="container">
                        <div className="row" style={{minHeight: '300px', paddingBottom: '50px'}}>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-center align-items-center mb-5 h-100">
                                    <img src="images/consultanubhav.png"/>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="d-flex justify-content-center align-items-center mb-5 h-100">
                                    <img src="images/studiolesworks.png"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </AboutBox>
                
                {/* <div className="minDiv-l-text-0">
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
                } */}

                {/* <MinDivBorder style={{marginLeft: '0'}} /> */}
                
                <SectionAboutMarquee>
                    <Marquee style={{height: '43px', overflow: 'hidden'}} loop={0} speed={50} gradientColor={'none'}>
                        {[...Array(10).keys()].map
                            ((x, index, arr) => 
                                (
                                    <AboutMarquee key={x}> 
                                        <span>
                                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                            Join us now! {index != (arr.length - 1) && [...Array(10)].map((i, i_index) => (<span key={i_index}>&nbsp;</span>))}
                                        </span>
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

const AboutBox = styled.div`
    margin-left: 70px;
    border-left: 1px solid ${light_theme_border_color};
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

    margin-left: -60px;
`;

const AboutYellowIcon = styled.div`
    position: absolute;
    background-color: #F5A130;
    border-radius: 50%;
    height: 96px;
    width: 96px;
    margin-top: -43px;
`;

const SignupBadge = styled.div`
    position: absolute;
`;

const SignupBadgeProducts = styled(SignupBadge)`
    height: 100%;
`;

const SignupBadgeBox = styled.div`
    position: absolute;
    width: 95px;
    height: 95px;
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(-30deg);
    z-index: 1;
`;

const SignupBadgeBoxProducts = styled(SignupBadgeBox)`
    background-image: url('/svgs/signupad2.svg');
    padding: 0 14px;
    margin-top: -35px;
    margin-left: -40px;

    @media (min-width: 576px)
    {
        width: 127px;
        height: 127px;
    }
`;

const SignupBadgeText = styled.div`
    font-family: Poppins Bold;
    font-weight: 700;
    text-align: center;
    max-width: 130px;
    white-space: normal;
    margin-top: -10px;
`;

const SignupBadgeTextProducts = styled(SignupBadgeText)`
    font-size: 12px;
    color: white;

    @media (min-width: 576px)
    {
        font-size: 20px;
    }
`;

// Section Two

const AboutSectionTwoImage1 = styled(AboutImage)`
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

const AboutSectionTwoTitleBox = styled.div`
    padding-left: 70px;
    padding-right: 40px;
    height: 96px;
`;

const AboutSectionTwoDescriptionBox = styled(AboutSectionTwoTitleBox)`
    height: calc(100% - 96px);
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

// Section Three

const AboutSectionThreeTopText = styled.div`
    height: 120px;
    border-bottom: 1px solid ${light_theme_border_color};

    span
    {
        font-size: 32px; 
        font-family: Poppins Bold;
        color: #000000;
    }

    @media (min-width: 992px)
    {
        border-bottom: 0;
    }
`;

const AboutSectionThreeLeftText = styled.div`
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    font-family: Poppins Bold;
    color: #959595;
`;

const AboutSectionThreeRight = styled.div` 
    border-top: 1px solid ${light_theme_border_color};
    border-bottom: 1px solid ${light_theme_border_color};

    @media (min-width: 992px)
    {
        border-top: 1px solid ${light_theme_border_color};
        border-left: 1px solid ${light_theme_border_color};
    }
`;

const AboutSectionThreeRightText = styled.div` 
    font-family: Poppins Regular;
    font-size: 16px;
    line-height: 32px;
    font-weight: 400;
    color: #111111;
    padding: 24px 0;
`;
                
// Section Four

const AboutSectionFourBody = styled.div`
    padding-left: 125px;
    padding-right: 50px;
`;

const AboutSectionFourBodyLeft = styled(AboutSectionFourBody)`
    border-right: 1px solid ${light_theme_border_color};
`;

const AboutSectionFourHeader = styled.div`
    font-family: Staatliches;
    font-weight: 400;
    font-size: 32px;
    color: #111111;
    height: 105px;
    line-height: 105px;
`;

const AboutSectionFourTitle = styled.div`
    font-family: Poppins SemiBold;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #111111;
    padding-top: 40px;
`;

const AboutSectionFourDescription = styled.div`
    font-family: Poppins;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #464646;
    padding-top: 10px;
`;

const AboutSectionFourIconBox = styled.div`
    position: absolute;
    margin-left: -60px;
`;

// Section Five

const AboutSectionFive = styled.div`
    font-family: Poppins Medium Italic;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
`;

const AboutSectionFiveTitle = styled(AboutSectionFive)`
    color: #111111;
    padding-top: 101px;
`;

const AboutSectionFiveSubTitle = styled(AboutSectionFive)`
    color: #838282;
    padding-bottom: 48px;
`;

const AboutSectionFiveDescription = styled.div`
    font-family: Poppins Medium;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    padding-bottom: 101px;
`;

const AboutSectionFourFirstCrew = styled.div`
 border-bottom: 1px solid ${light_theme_border_color};
`;

// Section Six

const AboutSectionSixTitle = styled.div`
    font-family: Poppins Medium;
    font-weight: 500;
    font-size: 32px;
    padding: 30px 0;
`;

// 

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
