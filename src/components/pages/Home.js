import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MinDiv } from "../partials/Sections";
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
            <SectionOneStripe className="d-flex align-items-center">
                <p className="marquee w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p>
                <p className="marquee marquee2 w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p>
                <p className="marquee marquee3 w-100">
                    <span>We are currently avaliable at delhi, to know more Click here..</span>
                </p>
            </SectionOneStripe>

            <MinDiv>

                {/* Section One */}
                <SectionOne>
                    <SectionOneOverlay className="d-flex justify-content-center">
                        <SectionOneText className="mt-auto mb-5">
                            Culinary delights beyond<br />Spacetime
                        </SectionOneText>
                    </SectionOneOverlay>
                </SectionOne>

                {/* Section Two */}
                <SectionTwo className="pt-5">
                    {/* One */}
                    <SectionTwoTitle className="pt-5">
                        Good Food, always
                    </SectionTwoTitle>
                    <SectionTwoDescription>
                        As we have declassified the best that Frozen Food has<br />food to offer
                    </SectionTwoDescription>

                    <div className="d-inline-block w-auto">
                        <div className="ml-3">
                            <SectionTwoTextActive>The Snacks</SectionTwoTextActive>
                            <SectionTwoText>The Ice Creams</SectionTwoText>
                            <SectionTwoText>Raw Meat</SectionTwoText>
                            <SectionTwoText>Quick & Easy Meals</SectionTwoText>
                            <SectionTwoText>and more</SectionTwoText>
                            <SectionTwoButton className="mt-5">See all foods</SectionTwoButton>
                            <br />
                        </div>
                    </div>
                    <SectionTwoImage />

                    {/* Two */}
                    <SectionTwoTitle className="mt-5 pt-5">
                        Why go sub-zero?
                    </SectionTwoTitle>
                    <SectionTwoDescription>
                        Properly Frozen Food at -18° C helps fight food wastage & locks in more<br /> nutrition. Without the need for any preservatives or loss of flavour
                    </SectionTwoDescription>
                    <div className="d-flex justify-content-center mb-3">
                        <SectionThreeButton>Show me the evidence</SectionThreeButton>
                    </div>

                    {/* Three */}
                    <SectionThreeImage />

                    <SectionThreeTitleBox>
                        <SectionThreeTitle>
                            <span className="text-white" style={{fontFamily: 'Poppins Bold'}}>Close Encounters of the</span>
                            <br /> 
                            <span className="text-black" style={{fontFamily: 'Poppins Bold'}}>Hungry Kind</span>
                        </SectionThreeTitle>
                    </SectionThreeTitleBox>

                    <SectionTwoDescription>
                        Subscriptions help us estimate demand better, fight food waste and grow<br /> this community meaningfully, Buying even one product every week<br /> automatically gives you all the benefits!
                    </SectionTwoDescription>

                    <div className="container">
                        <div className="row">
                            <div className="col-6 pt-5">
                                <ul className="ul-check-circle ">
                                    <li>Save upto 15% on every purchase</li>
                                    <li>Free Products, Limited Releases & Pre-Orders</li>
                                    <li>No committments and No extra Fees</li>
                                </ul>
                            </div>
                            <div className="col-6 pt-5">
                                <ul className="ul-check-circle ">
                                    <li>A community that takes you back to a happier future</li>
                                    <li>Access Exclusive Content & Uncrowded Events</li>
                                    <li>Have a say in where we go and what we bring</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-3">
                        <SectionTwoButton>
                            <span style={{marginLeft: '10px'}}>Lets Shop!</span>
                        </SectionTwoButton>
                    </div>

                    {/* Four */}
                    
                    
                    <SectionTwoTitle className="mt-5 pt-5">
                        Saucers that are taking off...
                    </SectionTwoTitle>

                    <div className="row my-5">
                        <div className="d-flex justify-content-center align-items-center">
                            {products &&
                                products.map(p => (
                                        <SectionFourRectangle key={p.id.toString()}>
                                            <img className="section-four-product-image" src={p.attributes.path}></img>
                                            <SectionFourRectangleText>{p.attributes.name}</SectionFourRectangleText>
                                        </SectionFourRectangle>
                                    )
                                )
                            }
                            {/* <SectionFourRectangle>
                                <img className="section-four-product-image" src="images/products/Rectangle 2.png"></img>
                                <SectionFourRectangleText>The Snacks</SectionFourRectangleText>
                            </SectionFourRectangle>
                            <SectionFourRectangle>
                                <img className="section-four-product-image" src="images/products/Rectangle 3.png"></img>
                                <SectionFourRectangleText>The Ice Creams</SectionFourRectangleText>
                            </SectionFourRectangle>
                            <SectionFourRectangle>
                                <img className="section-four-product-image" src="images/products/Rectangle 4.png"></img>
                                <SectionFourRectangleText>Quick & Easy Meals</SectionFourRectangleText>
                            </SectionFourRectangle>
                            <SectionFourRectangle>
                                <img className="section-four-product-image" src="images/products/Rectangle 5.png"></img>
                                <SectionFourRectangleText>Raw Meat</SectionFourRectangleText>
                            </SectionFourRectangle> */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center mb-5" style={{height: '35px'}}>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-left"></span>
                            <span className="svg-icon svg-line svg-icon-line-active svg-line-nohover"></span>
                            <span className="svg-icon svg-line svg-icon-line"></span>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-right"></span>
                        </div>
                    </div>

                    {/* Five */}

                    <SectionFiveImage className="d-flex justify-content-center mt-5 pt-5">
                        <SectionOneStripe className="d-flex align-items-center SectionFiveStripeAngle">
                            <p className="marquee marquee-transform w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p>
                            <p className="marquee marquee2-transform marquee2 w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p>
                            <p className="marquee marquee3-transform marquee3 w-100">
                                <span>HoReCa Cloud Kitchens Logistics Investors Bulk Orders Media or simply curious </span>
                            </p>
                        </SectionOneStripe>
                        <SectionFiveStarImage className="d-flex justify-content-center align-items-center mt-auto mb-5">
                            <div>
                                <SectionFiveStarTitle>JOIN US!</SectionFiveStarTitle>
                                <SectionFiveStarDescription>Let’s have a<br />chat!</SectionFiveStarDescription>
                            </div>
                        </SectionFiveStarImage>
                    </SectionFiveImage>

                    {/* Six */}
                    
                    <SectionTwoTitle className="mt-5 pt-5">
                        FAQ’s
                    </SectionTwoTitle>
                    <SectionTwoDescription className="mt-3">
                        Have a question, we are here to help.
                    </SectionTwoDescription>

                    <div className="container pt-5 pb-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>How does Flying Saucer work?</SectionFiveFaqText>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-down"></span>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>What products do you have?</SectionFiveFaqText>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-down"></span>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Does it cost money to sign up?</SectionFiveFaqText>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-down"></span>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Where can I find your recipes?</SectionFiveFaqText>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-down"></span>
                        </div>
                        <hr style={{opacity: '1'}} />
                        <div className="d-flex justify-content-between align-items-center">
                            <SectionFiveFaqText>Can I buy a gift card for a friend?</SectionFiveFaqText>
                            <span className="svg-icon svg-icon-min svg-icon-chevron-down"></span>
                        </div>
                        <hr style={{opacity: '1'}} />
                    </div>

                </SectionTwo>

            <Footer />
            </MinDiv>
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
`;

const SectionOneOverlay = styled.div`
    position: absolute;
    min-width: calc(100vw - 90px);
    max-height: 950px;
    min-height: calc(100vw / 2.21);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.5) 100%);
`;

const SectionOneText = styled.div`
    font-weight: 600;
    font-size: 56px;
    line-height: 70px;
    text-align: center;
    color: #FFFFFF;
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

// Section Two
const SectionTwo = styled.div`
    width: 100%;
    background: #F6F6F6;
`;

// Section Two 1
const SectionTwoTitle = styled.div`
    width: 100%;
    text-align: center;
    font-family: Poppins Bold;
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
    color: #000000;
`;

const SectionTwoDescription = styled.div`
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
    color: #464646;
`;

const SectionTwoImage = styled.div`
    height: 534px;
    width: 820px;
    display: inline-block;
    background: url('images/jamaicansnacks1.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 50px;
`;

const SectionTwoTextActive = styled.div`
    font-weight: 600;
    margin: 24px;
    font-size: 48px;
    text-align: left;
    line-height:72px;
    color: #777777;
`;

const SectionTwoText = styled.div`
    font-weight: 600;
    margin: 24px;
    font-size: 48px;
    text-align: left;
    line-height:72px;
    color: #000000;
`;

const SectionTwoButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-between;
    padding: 12px 45px;
    font-size: 16px;
    color: #ffffff;
    width: 200px;
    height: 48px;
    margin: 24px;
    background: #000000;
    border-radius: 4px;
`;

const SectionThreeButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-between;
    padding: 12px 45px;
    font-size: 16px;
    color: #ffffff;
    width: 281px;
    height: 48px;
    margin: 48px;
    background: #000000;
    border-radius: 4px;
`;

// Three
const SectionThreeImage = styled.div`
    min-width: 100%;
    max-height: 950px;
    min-height: calc(100vw / 2.21);
    background-image: url('images/Rectangle 3057.png');
    background-size: cover;
`;

const SectionThreeTitleBox = styled.div`

`;

const SectionThreeTitle = styled.div`
    margin-top: -85px;
    font-weight: 700;
    font-size: 56px;
    line-height: 84px;
    text-align: center;
    margin-bottom: 60px;
`;

// Four
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