import React from "react";
import styled from "styled-components";
import { SectionCommonButton } from "../Theme";
import { SectionTwoDescription } from "./HomeSectionTwo";

function HomeSectionThree() {
    return (
        <div>
            <div className="d-xl-flex pt-5 pb-5 mb-5 w-100">
                <div className="float-xl-left w-100">
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
                <SectionThreeTitle>
                    <span className="text-white">Close Encounters of the</span>
                    <br /> 
                    <span className="text-black">Hungry Kind</span>
                </SectionThreeTitle>
            </SectionThreeTitleBox>

            <SectionTwoDescription className=" minDiv-text text-center">
                Subscriptions help us estimate demand better, fight food waste and grow this community meaningfully, Buying even one product every week automatically gives you all the benefits!
            </SectionTwoDescription>

            <SectionHungryBox>
                <div className="row">
                    <div className="col-12 pt-5 minDiv-text">
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon>
                                    <span className="svg-icon svg-icon-large svg-icon-large-nohover svg-icon-save-energy"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    Save upto 15% on every purchase
                                </SectionHungryText>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon>
                                    <span className="svg-icon svg-icon-large svg-icon-large-nohover svg-icon-community"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    A community that takes you back to a happier future
                                </SectionHungryText>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon>
                                    <span className="svg-icon svg-icon-large svg-icon-large-nohover svg-icon-bakery-products"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    Free Products, Limited Releases & Pre-Orders
                                </SectionHungryText>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon>
                                    <span className="svg-icon svg-icon-large svg-icon-large-nohover svg-icon-event"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    Access Exclusive Content & Uncrowded Events
                                </SectionHungryText>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon 
                                    style={{height: '55px', marginTop: '5px', marginLeft: '5px'}}>
                                    <span className="svg-icon svg-icon-mid svg-icon-mid-nohover svg-icon-noun-no"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    No committments and No extra Fees
                                </SectionHungryText>
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <SectionHungryIcon>
                                    <span className="svg-icon svg-icon-large svg-icon-large-nohover svg-icon-speech"></span>
                                </SectionHungryIcon>
                                <SectionHungryText>
                                    Have a say in where we go and what we bring
                                </SectionHungryText>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionHungryBox>

            <div className="d-flex justify-content-center mt-3 pb-5">
                <SectionFourButton>
                    <span style={{marginLeft: '10px'}}>Lets Shop!</span>
                </SectionFourButton>
            </div>
        </div>
    );
}

export default HomeSectionThree;
export { };


// Section Three
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

const SectionTwoThreeTitle = styled.div`
    font-weight: 400;
    font-size: 24px;
    text-align: left;
    color: #000000;

    @media (min-width: 768px)
    {
        font-size: 48px;
    }

    @media (min-width: 1200px)
    {
        font-size: 48px;
        line-height: 72px;
        text-align: right;
    }
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

const SectionThreeTitleBox = styled.div`

`;

const SectionThreeTitle = styled.div`
    font-family: Poppins Bold;
    font-weight: 400;
    text-align: center;
    margin-bottom: 60px;

    @media screen and (max-width: 424px) 
    {
        font-size: 32px;
        margin-top: -48px;
    }
    @media (min-width: 425px) and (max-width: 767px) 
    {
        font-size: 36px;
        margin-top: -55px;
    }
    @media (min-width: 768px) 
    {
        font-size: 56px;
        line-height: 84px;
        margin-top: -84px;
    }
`;

const SectionHungryBox = styled.div`    
    margin: 0 20px;

    @media (min-width: 576px) and (max-width: 767px)
    {
        margin: 0 30px;
    }
    @media (min-width: 768px) and (max-width: 991px)
    {
        margin: 0 30px;
    }
    @media (min-width: 992px)
    {
        margin: 0 80px;
    }   
`;

const SectionHungryText = styled.div`
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;

    @media (min-width: 768px)
    {
        font-size: 24px;
        line-height: 42px;
        text-align: left;
    }
`;

const SectionHungryIcon = styled.div`
    height: 60px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;

    @media (min-width: 768px)
    {
        justify-content: start;
    }

`;

const SectionFourButton = styled(SectionCommonButton)`
    margin: 24px 50px;

    @media (min-width: 768px)
    {
        margin: 24px 0;
    }
`;