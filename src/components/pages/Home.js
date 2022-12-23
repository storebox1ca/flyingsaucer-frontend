import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Header, { Footer, Navbar, MinDivBorder } from "../partials/Theme";
import Carousel, { CarouselItem } from "../../components/partials/Carousel";

// import HomeSectionTwo, { SectionTwoTitle, SectionTwoDescription } from "../partials/HomeSections/HomeSectionTwo";
// import HomeSectionThree from "../partials/HomeSections/HomeSectionThree";
// import HomeSectionFour from "../partials/HomeSections/HomeSectionFour";

const Home = () => {

    return (
        <div style={{backgroundColor: '#EEEBE6'}}>

            {/* Homepage */}
            <Navbar />

            <Header />

            {/* Marquee stripe */}
            <SectionOneStripe className="d-flex align-items-center" style={{width: '100w', marginTop: '12px', overflow: 'hidden', zIndex: '10100'}}>
                <Marquee style={{height: '42px'}} loop={0} speed={50} gradientColor={'none'}>
                    <div className="mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        We are currently avaliable at delhi, to know more <strong>Click here</strong>.. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        We are currently avaliable at delhi, to know more <strong>Click here</strong>.. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        We are currently avaliable at delhi, to know more <strong>Click here</strong>.. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        We are currently avaliable at delhi, to know more <strong>Click here</strong>.. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        We are currently avaliable at delhi, to know more <strong>Click here</strong>..
                    </div>
                </Marquee>
            </SectionOneStripe>

            {/* Container */}
            <div className="MinDiv MinHeight" style={{backgroundColor: '#EEEBE6'}}>

                {/* Section One */}
                <SectionOne>
                    <Carousel>
                        <CarouselItem>
                            <SliderItem className="d-flex align-items-start" style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.5) 100%), url('images/Rectangle 3038.png')"}}>
                                <div className="minDiv-text">
                                    <SectionOneText className="text-wrap">
                                        Reliable Interplanetary Food Delivery 
                                    </SectionOneText>
                                    <SectionOneDescription className="text-wrap">
                                        Celebrate with good food from around the world
                                    </SectionOneDescription>
                                    <CarouselButton>View Shop</CarouselButton>
                                </div>
                            </SliderItem>
                        </CarouselItem>
                        <CarouselItem>
                            <SliderItem className="d-flex align-items-start" style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.5) 100%), url('images/image 17.png')"}}>
                                <div className="minDiv-text">
                                    <SectionOneText className="text-wrap">
                                        Taste trips from home 
                                    </SectionOneText>
                                    <SectionOneDescription className="text-wrap">
                                        Sign up for free delivery, always
                                    </SectionOneDescription>
                                    <CarouselButton>View Shop</CarouselButton>
                                </div>
                            </SliderItem>
                        </CarouselItem>
                        <CarouselItem>
                            <SliderItem className="d-flex align-items-start" style={{backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.5) 100%), url('images/Rectangle 3038 nasta.png')"}}>
                                <div className="minDiv-text">
                                    <SectionOneText className="text-wrap">
                                        we only harm food tourism
                                    </SectionOneText>
                                    <SectionOneDescription className="text-wrap">
                                        Norwegian Salmon, Plant-based Seafood, Truffles, Groceries and more!
                                    </SectionOneDescription>
                                    <CarouselButton>View Shop</CarouselButton>
                                </div>
                            </SliderItem>
                        </CarouselItem>
                    </Carousel>
                </SectionOne>


                <div className="w-100">
                    
                    {/* <SectionOne style={{backgroundImage: 'none'}}>

                        <div className="slider">

                            <div className="slides">
                                <div id="slide-1">
                                    <img src="/images/Rectangle 3038.png" />
                                </div>
                                <div id="slide-2">
                                    2
                                </div>
                                <div id="slide-3">
                                    3
                                </div>
                                <div id="slide-4">
                                    4
                                </div>
                                <div id="slide-5">
                                    5
                                </div>
                            </div>

                            <a data-target="#slide-1" data-toggle="tab">1</a>
                            <a data-target="#slide-2" data-toggle="tab">2</a>
                            <a data-target="#slide-3" data-toggle="tab">3</a>
                            <a data-target="#slide-4" data-toggle="tab">4</a>
                            <a data-target="#slide-5" data-toggle="tab">5</a>

                        </div>

                    </SectionOne> */}

                    {/* Section Two */}
                    {/* <HomeSectionTwo /> */}

                    {/* <MinDivBorder /> */}

                    {/* Section Three */}
                    {/* <HomeSectionThree /> */}

                    {/* <MinDivBorder className="mt-5"/> */}

                    
                    {/* Section Four */}
                    {/* <HomeSectionFour /> */}

                    {/* Five */}

                    {/* <SectionFiveImage className="d-flex justify-content-center mt-5 pt-5">
                        <SectionOneStripe className="d-flex align-items-center SectionFiveStripeAngle">                            
                            <Marquee style={{height: '42px'}} loop={0} speed={50} gradientColor={'none'}>
                                <div className="mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>
                                <div className="mt-2">
                                    HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>
                                <div className="mt-2">
                                    HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>
                                <div className="mt-2">
                                    HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </div>
                                <div className="mt-2">
                                    It can invade food waste, malnutrition and keep things superfresh.
                                </div>
                            </Marquee>
                        </SectionOneStripe>
                        <SectionFiveStarImage className="d-flex justify-content-center align-items-center mt-auto mb-5">
                            <div>
                                <SectionFiveStarTitle>JOIN US!</SectionFiveStarTitle>
                                <SectionFiveStarDescription>Let’s have a<br />chat!</SectionFiveStarDescription>
                            </div>
                        </SectionFiveStarImage>
                    </SectionFiveImage> */}

                    {/* Six */}
                    
                    {/* <SectionTwoTitle className="mt-5 pt-5 text-center">
                        FAQ’s
                    </SectionTwoTitle>
                    <SectionTwoDescription className="mt-3 text-center">
                        Have a question, we are here to help.
                    </SectionTwoDescription>

                    <SectionFAQ className="pt-5 pb-md-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>How does Flying Saucer work?</SectionFiveFaqText>
                            <div style={{minWidth: '20px>'}}><span className="svg-icon svg-icon-min svg-icon-chevron-down"></span></div>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>What products do you have?</SectionFiveFaqText>
                            <div style={{minWidth: '20px>'}}><span className="svg-icon svg-icon-min svg-icon-chevron-down"></span></div>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Does it cost money to sign up?</SectionFiveFaqText>
                            <div style={{minWidth: '20px>'}}><span className="svg-icon svg-icon-min svg-icon-chevron-down"></span></div>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Where can I find your recipes?</SectionFiveFaqText>
                            <div style={{minWidth: '20px>'}}><span className="svg-icon svg-icon-min svg-icon-chevron-down"></span></div>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Can I buy a gift card for a friend?</SectionFiveFaqText>
                            <div style={{minHeight: '20px>'}}><span className="svg-icon svg-icon-min svg-icon-chevron-down"></span></div>
                        </div>
                    </SectionFAQ> */}

                    {/* <MinDivBorder className="mt-5">
                        <div className="my-5 py-lg-5">
                            <StayConnectedBox className="row">
                                <div className="col-12 col-xl-6" style={{backgroundColor: '#565656'}}>
                                    <div className="p-5 h-100 mt-5">
                                        <StayConnectedText className="mb-4">
                                            Stay connected
                                        </StayConnectedText>
                                        <StayConnectedDescription>
                                            And curated all the good stuff in food, 
                                            culture and what we’re doing, things we 
                                            believe are too good to be 
                                            true but no one will tell you.
                                        </StayConnectedDescription>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6">
                                    <div className="p-5 h-100 mt-5">
                                        <GetInTouchText>
                                            Get in Touch
                                        </GetInTouchText>
                                        <GetInTouchEmail>
                                            <div className="input-group submit-box">
                                                <input type="text" className="form-control submit-mail-left" placeholder="Enter your mail" />
                                                <div className="input-group-append submit-mail-right d-flex justify-content-center align-items-center">
                                                    <svg className="svg-icon svg-icon-button svg-icon-noun-arrow"></svg>
                                                </div>
                                            </div>
                                        </GetInTouchEmail>
                                    </div>
                                </div>
                            </StayConnectedBox>
                        </div>
                    </MinDivBorder> */}

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;

// Section One
const SectionOne = styled.div`
    min-width: 100%;
    max-height: 950px;
`;

const SectionOneStripe = styled.div`
    position: absolute;
    min-width: 100%;
    height: 42px;
    background: #FFFFFF;
    border: 1px solid lightgrey;
    border-top: 0;
    border-left: 0;
    border-right: 0;
`;

const SectionOneText = styled.div`
    font-family: Staatliches;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: #FFFFFF;
    margin-top: 0;
    font-size: 24px;
    text-shadow: 1px 1px rgba(0, 0, 0, 0.25), -1px -1px rgba(0, 0, 0, 0.25);
    line-height: 1;
   
    @media (min-width: 576px) and (max-width: 767px)
    {
        margin-top: 0;
        font-size: 36px;
    }

    @media (min-width: 768px)
    {
        margin-top: 0;
        font-size: 48px;
    }
`;

const SectionOneDescription = styled.div`
    font-weight: 400;
    color: #ffffff;
    font-size: 12px;
    text-align: left;
    z-index: 101;
    margin-top: 10px;

    @media (min-width: 768px)
    {
        font-size: 20px;
    }
`;

// Five
const SectionFiveImage = styled.div`
    position: relative;
    min-width: 100%;
    max-height: 950px;
    min-height: calc(100vw / 2.21);
    background-image: url('images/Rectangle 3078.png');
    background-size: cover;
`;

const SectionFiveStarImage = styled.div`
    width: 155px;
    height: 155px;
    background-image: url('images/Star 1.png');
    background-size: cover;

    @media (min-width: 768px)
    {
        width: 310px;
        height: 310px;
    }
`;

const SectionFiveStarTitle = styled.div`
    width: 100%;
    font-family: Poppins Bold;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    color: #000000;

    @media (min-width: 768px)
    {
        font-size: 32px;
        line-height: 48px;
    }
`;

const SectionFiveStarDescription = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;

    @media (min-width: 768px)
    {
        font-size: 32px;
        line-height: 48px;
    }
`;

const SectionFiveFaqText = styled.div`
    font-weight: 600;
    font-size: 16px;

    @media (min-width: 767px)
    {
        font-size: 32px;
        line-height: 52px;
    }
`;

const SectionFAQ = styled.div`
    padding: 0 30px;

    @media (min-width: 576px) and (max-width: 991px)
    {
        padding: 0 50px;
    }
    @media (min-width: 992px)
    {
        padding: 0 100px;
    }
`;

// const SectionGetInTouch = styled.div`
//     border: 1px solid #000000;
//     margin-right: 100px;
// `;

const StayConnectedText = styled.div`
    font-weight: 400;
    font-size: 36px;
    line-height: 52px;
    color: #FFFFFF;
`;

const StayConnectedDescription = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;
    margin-bottom: 50px;
`;

const GetInTouchText = styled.div`
    font-weight: 400;
    font-size: 36px;
    line-height: 52px;
    color: #000000;
`;

const GetInTouchEmail = styled.div`
    margin-top: 30px;
    margin-bottom: 50px;

    @media (min-width: 1200px)
    {
        margin-top: 50px;
    }
`;

const StayConnectedBox = styled.div`
    border: 1px solid #000000;


    @media (min-width: 576px) and (max-width: 767px)
    {
        margin: 0 50px 0 0;
    }
    @media (min-width: 768px) and (max-width: 991px)
    {
        margin: 0 50px 0 0;
    }
    @media (min-width: 992px)
    {
        margin: 0 100px 0 0;
    }
`;

const SliderItem = styled.div`
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.5) 100%), url('images/image 17.png');
    background-size: cover;
    background-repeat: norepeat;
    background-position: top;
    height: calc(100vw / 2.21);
    max-height: 768px;
    min-height: 280px;
    padding-top: 80px;

    @media (min-width: 992px)
    {
        padding-top: 100px;
    }
`;

const CarouselButton = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
    max-width: 100px;
    padding: 6px 4px;
    font-size: 12px;

    @media (min-width: 768px) and (max-width: 991px)
    {
        margin-top: 24px;
        max-width: 160px;
        padding: 9px 7px;
        font-size: 16px;
    }
    
    @media (min-width: 992px)
    {
        margin-top: 36px;
        max-width: 200px;
        padding: 12px 10px;
        font-size: 16px;
    }
`;