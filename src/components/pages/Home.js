import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

import Header, { Footer, Navbar } from "../partials/Theme";
import Carousel, { CarouselItem } from "../../components/partials/Carousel";

import { SectionTwoTitle, SectionTwoDescription } from "../partials/HomeSections/HomeSectionTwo";
import HomeSectionFour from "../partials/HomeSections/HomeSectionFour";

const Home = () => {

    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        getCarouselItems();
      }, []);

    function getCarouselItems() {
        fetch("/testData/carousels.json")
          .then(res => res.json())
          .then(data => {
            setCarouselItems(data.data);
          })
      }

    return (
        <div>

            {/* Homepage */}
            <Navbar />

            <Header />

            {/* Marquee stripe */}
            <SectionOneStripe className="d-flex align-items-center" style={{width: '100w', marginTop: '12px', overflow: 'hidden', zIndex: '10100'}}>
                <Marquee style={{height: '42px', paddingTop: '5px', overflow: 'hidden'}} loop={0} speed={50} gradientColor={'none'}>
                    
                {[...Array(5).keys()].map
                    ((x, index, arr) => 
                        (
                            <div key={x}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                We are currently avaliable at delhi, to know more <strong>Click here</strong> ... {index != (arr.length - 1) && [...Array(10)].map((i, i_index) => (<span key={i_index}>&nbsp;</span>))}
                            </div>
                        )
                    )
                }
                </Marquee>
            </SectionOneStripe>

            {/* Container */}
            <div className="MinDiv MinHeight">

                {/* Section One */}
                <SectionOne className="h-100">

                    <SignupBadgeCarousel className="w-100">
                        <div className="h-100 d-flex justify-content-start justify-content-sm-end align-items-start align-items-sm-end" style={{marginRight: '150px', paddingLeft: '30px'}}>
                            <SignupBadgeBox className="d-flex justify-content-center align-items-center">
                                <SignupBadgeText>Sign up now!</SignupBadgeText>
                            </SignupBadgeBox>
                        </div>
                    </SignupBadgeCarousel>

                    {carouselItems && carouselItems.length > 0 &&
                        <Carousel>
                            {carouselItems.map
                                (c => 
                                    (
                                        <CarouselItem key={c.id}>
                                            <SliderItem className="d-flex align-items-start" 
                                                style={{backgroundImage: c.desktop.image, backgroundPosition: c.desktop.position}}>
                                                <div className="minDiv-text">
                                                    <SectionOneText className="text-wrap">
                                                        {c.text}
                                                    </SectionOneText>
                                                    <SectionOneDescription className="text-wrap">
                                                        {c.description}
                                                    </SectionOneDescription>
                                                    <CarouselButton className="d-none d-sm-block">Let's Shop</CarouselButton>
                                                </div>
                                            </SliderItem>
                                        </CarouselItem>
                                    )
                                )
                            }
                    </Carousel>
                    }
                </SectionOne>


                <div className="w-100">
                    <div style={{marginTop: '260px', marginBottom: '400px'}}>
                        <SectionTwoTitle className="minDiv-text text-center">
                            The Flying saucer project
                        </SectionTwoTitle>
                        <div className="d-flex justify-content-center text-center">
                            <div className="d-block">
                                <SectionTwoDescription>
                                    <div className="minDiv-text" style={{maxWidth: '850px'}}>
                                        We’re declassifying frozen food to invade wastage, fight malnutrition and keep things super fresh.
                                    </div>
                                </SectionTwoDescription>
                                <div className="d-flex justify-content-center text-center">
                                    <FirstButton>
                                        See&nbsp;Evidence
                                        <span className="svg-icon svg-icon-right-arrow-dark" 
                                            style={{height: '10px', width: '15px', marginLeft: '10px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></span>
                                    </FirstButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Section Four */}
                    <HomeSectionFour />

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
        margin-top: 25px;
        font-size: 36px;
    }

    @media (min-width: 768px)
    {
        margin-top: 50px;
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

const SliderItem = styled.div`
    background-size: cover;  
    height: calc(100vh - 120px);
    background-repeat: norepeat;  
    // max-height: 768px;
    min-height: 280px;
    padding-top: 80px;

    @media (min-width: 576px)
    {
        height: calc(100vh - 90px);
    }

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

const FirstButton = styled.div`
    font-family: Poppins;
    font-weight: 600;
    border: 1px solid #111111;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
    max-width: 130px;
    padding: 6px 12px;
    font-size: 12px;
    background-color: #F5A130;

    @media (min-width: 768px) and (max-width: 991px)
    {
        margin-top: 24px;
        max-width: 180px;
        padding: 9px 21px;
        font-size: 16px;
    }
    
    @media (min-width: 992px)
    {
        margin-top: 48px;
        max-width: 235px;
        padding: 12px 30px;
        font-size: 20px;
    }
`;

const SignupBadgeCarousel = styled.div`
    position: absolute; 
    height: calc(100vh - 120px);

    @media (min-width: 576px)
    {
        height: calc(100vh - 90px);
    }
`;

const SignupBadgeBox = styled.div`
    position: absolute;
    width: 95px;
    height: 95px;
    background-image: url('/svgs/signupad.svg');
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(-30deg);
    padding: 0 4px;
    z-index: 1;
    margin-top: 160px;

    @media (min-width: 576px)
    {
        width: 180px;
        height: 180px;
        margin-bottom: 75px;
        transform: rotate(30deg);
    }
`;

const SignupBadgeText = styled.div`
    font-family: Poppins;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
    color: #FFFFFF;
    max-width: 130px;
    white-space: normal;
    margin-top: -10px;

    @media (min-width: 576px)
    {
        font-size: 26px;
    }
`;