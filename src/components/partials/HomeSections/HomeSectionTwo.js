import React from "react";
import styled from "styled-components";
import { SectionCommonButton } from "../Theme";

function HomeSectionTwo() {
    return ( 
        <div>
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
        </div>
    );
}

export default HomeSectionTwo;
export { SectionTwoTitle, SectionTwoDescription };

// Section Two
const SectionTwoTitle = styled.div`
    width: 100%;
    font-family: Poppins Bold;
    font-weight: 800;
    font-size: 24px;
    color: #000000;

    @media (min-width: 768px)
    {
        font-size: 48px;
        line-height: 72px;
    }
`;

const SectionTwoDescription = styled.div`
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: #464646;
    margin-top: 25px;

    @media (min-width: 768px)
    {
        font-size: 32px;
        line-height: 52px;
    }
`;

const SectionTwoText = styled.div`
    font-weight: 400;
    margin: 16px 0;
    font-size: 20px;
    color: #000000;

    @media (min-width: 768px)
    {
        margin: 24px 0;
        font-size: 40px;
        line-height: 60px;
    }
`;

const SectionTwoButton = styled(SectionCommonButton)`
    margin: 24px 0;
`;