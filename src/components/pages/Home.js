import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { MinDivBorder } from "../partials/Sections";

import Header, { Footer, Navbar } from "../partials/Theme";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
      }, []);

    function getProducts() {
        fetch(`${process.env.REACT_APP_BACKEND}api/products`)
          .then(res => res.json())
          .then(data => {
            console.log(data.data);
            setProducts(data.data);
          })
      }

    return (
        <div>

            {/* Homepage */}
            <Navbar />
            <Header />

            {/* Marquee stripe */}
            <SectionOneStripe className="d-flex align-items-center" style={{width: '100w', overflow: 'hidden'}}>
                {/* <p className="marquee w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p> */}
                {/* <p className="marquee marquee2 w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p>
                <p className="marquee marquee3 w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p> */}
                <Marquee style={{height: '42px'}} loop={0} speed={50} gradientColor={'none'}>
                    <div className="mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        We are currently avaliable at delhi, to know more Click here.. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        It can invade food waste, malnutrition and keep things superfresh. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        It can invade food waste, malnutrition and keep things superfresh. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        It can invade food waste, malnutrition and keep things superfresh. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </div>
                    <div className="mt-2">
                        It can invade food waste, malnutrition and keep things superfresh.
                    </div>
                </Marquee>
                
            </SectionOneStripe>

            <div className="MinDiv" style={{backgroundColor: '#EEEBE6'}}>

                {/* Section One */}
                <SectionOne>
                    <div className="SectionOneOverlay">
                        <div className="d-flex align-items-end SectionOneTextBox">
                            <div className="my-5 my-md-5 pt-3 py-md-3">
                                <div className="SectionOneText minDiv-text">
                                    Your freezer is a special place
                                </div>
                                <SectionOneDescription className="mt-auto minDiv-text">
                                    It can invade food waste, malnutrition and keep things superfresh
                                </SectionOneDescription>
                            </div>
                        </div>
                    </div>
                </SectionOne>

                {/* Section Two */}
                <SectionTwo>
                    {/* One */}
                    <SectionTwoTitle className="pt-5 minDiv-text">
                        So we’ve declassified Frozen Food
                    </SectionTwoTitle>
                    <SectionTwoDescription className="minDiv-text">
                        And built a launchpad for all the good food from around the world
                    </SectionTwoDescription>

                    <div className="row minDiv-text mb-5 pb-5">
                        <div className="col-12 col-xl-5">
                            <SectionTwoText style={{color: '#777777'}}>The Snacks</SectionTwoText>
                            <SectionTwoText>The Ice Creams</SectionTwoText>
                            <SectionTwoText>Ingredients</SectionTwoText>
                            <SectionTwoText>Quick & Easy Meals</SectionTwoText>
                            <SectionTwoText>and more...</SectionTwoText>
                            <SectionTwoButton className="mt-2">See all foods</SectionTwoButton>
                        </div>
                        <div className="col-12 col-xl-7 pt-4">
                            <img src="images/jamaicansnacks1.jpg" alt="" className="w-100" style={{maxHeight: '500px', maxWidth: '800px'}} />
                        </div>
                    </div>

                    {/* Two */}
                    <MinDivBorder />

                    <div className="d-xl-flex pt-5 pb-5 mb-5">
                        <div className="float-xl-left">
                            <SectionTwoDescription className=" minDiv-text">
                                Properly Frozen Food can stay fresh beyond space & time
                                <br />
                                <br />
                                It also helps the world fight food waste & locks in more nutrition 
                            </SectionTwoDescription>
                        </div>
                        <div className="float-xl-right" style={{minWidth: '450px'}}>
                            <SectionTwoThreeTitle className="minDiv-text mt-5 mt-xl-0 mb-5">
                                Why go <br />Sub-Zero?
                            </SectionTwoThreeTitle>
                            <SectionMoreEvidence className="mb-5">
                                <SectionTwoThreeButton>{'More evidence? ->'}</SectionTwoThreeButton>
                            </SectionMoreEvidence>
                        </div>
                    </div>

                    {/* Three */}
                    <SectionThreeImage />

                    <SectionThreeTitleBox>
                        <SectionThreeTitle className="SectionThreeTitle">
                            <span className="text-white">Close Encounters of the</span>
                            <br /> 
                            <span className="text-black">Hungry Kind</span>
                        </SectionThreeTitle>
                    </SectionThreeTitleBox>

                    <SectionTwoDescription className=" minDiv-text text-center">
                        Subscriptions help us estimate demand better, fight food waste and grow this community meaningfully, Buying even one product every week automatically gives you all the benefits!
                    </SectionTwoDescription>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 pt-5">
                                <ul className="ul-check-circle ">
                                    <li>Save upto 15% on every purchase</li>
                                    <li>Free Products, Limited Releases & Pre-Orders</li>
                                    <li>No committments and No extra Fees</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 pt-5">
                                <ul className="ul-check-circle ">
                                    <li>A community that takes you back to a happier future</li>
                                    <li>Access Exclusive Content & Uncrowded Events</li>
                                    <li>Have a say in where we go and what we bring</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-3 pb-5">
                        <SectionTwoButton>
                            <span style={{marginLeft: '10px'}}>Lets Shop!</span>
                        </SectionTwoButton>
                    </div>

                    <MinDivBorder className="mt-5"/>

                    {/* Four */}
                    
                    
                    <SectionFourTitle className="mt-5 pt-5 text-center" >
                        Saucers that are taking off...
                    </SectionFourTitle>

                    <div className="row my-5">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="slider">
                                <div className="slides">
                                    {products &&
                                        products.map(p => 
                                            (
                                                <SectionFourRectangle key={p.id.toString()}>
                                                    <img className="section-four-product-image" src={p.attributes.path}></img>
                                                    <SectionFourRectangleText>{p.attributes.name}</SectionFourRectangleText>
                                                </SectionFourRectangle>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                            
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="d-flex align-items-center" style={{marginTop: '23px', height: '35px'}}>
                                <span className="svg-icon svg-icon-min svg-icon-chevron-left"></span>
                            </div>
                            <div className="bottom-slider">
                                <div className="bottom-slides">
                                    {products &&
                                        products.map(p => 
                                            (
                                                <div className="d-inline-block invisible">@</div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                            <div className="d-flex align-items-center" style={{marginTop: '23px', height: '35px'}}>
                                <span className="svg-icon svg-icon-min svg-icon-chevron-right"></span>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="d-flex justify-content-center align-items-center mb-5" style={{height: '35px'}}>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-left"></span>
                            <span className="svg-icon svg-line svg-icon-line-active svg-line-nohover"></span>
                            <span className="svg-icon svg-line svg-icon-line"></span>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-right"></span>
                        </div>
                    </div> */}

                    {/* Five */}

                    <SectionFiveImage className="d-flex justify-content-center mt-5 pt-5">
                        <SectionOneStripe className="d-flex align-items-center SectionFiveStripeAngle">
                            {/* <p className="marquee marquee-transform w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p> */}
                            {/* <p className="marquee marquee2-transform marquee2 w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p>
                            <p className="marquee marquee3-transform marquee3 w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p> */}
                            
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
                    </SectionFiveImage>

                    {/* Six */}
                    
                    <SectionTwoTitle className="mt-5 pt-5 text-center">
                        FAQ’s
                    </SectionTwoTitle>
                    <SectionTwoDescription className="mt-3 text-center">
                        Have a question, we are here to help.
                    </SectionTwoDescription>

                    <SectionFAQ className="pt-5 pb-5">
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
                        <hr style={{opacity: '1'}} />
                    </SectionFAQ>

                </SectionTwo>

            <Footer />
            </div>
        </div>
    );
}

export default Home;

// Section One
const SectionOne = styled.div`
    min-width: 100%;
    max-height: 950px;
    min-height: calc(100vw / 2.21);
    background-image: url('images/Rectangle 3038.png');
    background-size: cover;
    background-position: center;
`;

const SectionOneStripe = styled.div`
    position: absolute;
    min-width: 100%;
    height: 42px;
    background: #FFFFFF;
    z-index: 110;
    border: 1px solid lightgrey;
    border-top: 0;
    border-left: 0;
    border-right: 0;

`;

const SectionOneDescription = styled.div`
    font-weight: 400;
    font-size: 32px;
    color: #ffffff;
    line-height: 48px;
    text-align: left;
    z-index:101;
`;

// Section Two
const SectionTwo = styled.div`
    width: 100%;
`;

// Section Two 1
const SectionTwoTitle = styled.div`
    width: 100%;
    font-family: Poppins Bold;
    font-weight: 800;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
`;

const SectionTwoDescription = styled.div`
    width: 100%;
    font-weight: 400;
    font-size: 32px;
    line-height: 52px;
    color: #464646;
`;

const SectionTwoThreeTitle = styled.div`
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    text-align: left;
    color: #000000;

    @media (min-width: 1200px)
    {
        text-align: right;
    }
`;

const SectionTwoImage = styled.div`
    display: inline-block;
    background: url('images/jamaicansnacks1.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 50px;
    max-width: calc(100vw - 100px);
`;

const SectionTwoText = styled.div`
    font-weight: 400;
    margin: 24px 0;
    font-size: 40px;
    line-height: 60px;
    color: #000000;
`;

const SectionTwoButton = styled.button`
    padding: 12px 45px;
    font-size: 16px;
    color: #ffffff;
    width: 200px;
    height: 48px;
    margin: 24px 0;
    background: #000000;
    border-radius: 4px;
`;

const SectionTwoThreeButton = styled.div`
    padding: 12px 48px;
    font-size: 16px;
    color: #ffffff;
    width: 244px;
    height: 48px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 400;
    line-height: 24px;
    color: #000000
`;

// Three
const SectionThreeImage = styled.div`
    min-width: 100%;
    min-Height: 250px;
    max-height: 950px;
    height: calc(100vw / 2.21);
    background-image: url('images/Rectangle 3057.png');
    background-size: cover;
    background-position: center;
`;

const SectionThreeTitleBox = styled.div`

`;

const SectionThreeTitle = styled.div`
    font-family: Poppins Bold;
    font-weight: 400;
    font-size: 56px;
    line-height: 84px;
    text-align: center;
    margin-bottom: 60px;
`;

// Four
const SectionFourTitle = styled.div`
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
`;

const SectionFourRectangle = styled.div`
    width: 288px;
    height: 317px;
    background: #ffffff;
    margin: 10px;
`;
const SectionFourRectangleText = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 10px;
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
    width: 310px;
    height: 310px;
    background-image: url('images/Star 1.png');
    background-size: cover;
`;

const SectionFiveStarTitle = styled.div`
    width: 100%;
    font-family: Poppins Bold;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;

    text-align: center;

    color: #000000;
`;

const SectionFiveStarDescription = styled.div`
    width: 100%;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    text-decoration-line: underline;

    color: #000000;
`;

const SectionFiveFaqText = styled.div`
    font-weight: 600;
    font-size: 32px;
    line-height: 52px;
`;

const SectionFAQ = styled.div`
    padding: 0 25px;

    @media (min-width: 575px) and (max-width: 849px)
    {
        padding: 0 50px;
    }
    @media (min-width: 850px)
    {
        padding: 0 100px;
    }
`;

const SectionMoreEvidence = styled.div`
    margin: 0 30px;
    display: flex;
    justify-content: flex-start;
    
    @media (min-width: 576px) and (max-width: 991px)
    {
        margin: 0 50px;
    }
    @media (min-width: 992px)
    {
        margin: 0 100px;
    }

    @media (min-width: 1200px)
    {
        justify-content: flex-end;
    }
`;