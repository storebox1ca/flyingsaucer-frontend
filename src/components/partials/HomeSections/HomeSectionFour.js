import React, { useEffect, useState } from "react";
import styled from "styled-components";

function HomeSectionFour() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
      }, []);

    function getProducts() {
        // fetch(`${process.env.REACT_APP_BACKEND}api/products`)
        fetch("/testData/products.json")
          .then(res => res.json())
          .then(data => {
            setProducts(data.data);
          })
      }

    return (
        <div>
            {/* Four */}                    
            {products && products.length > 0 &&
                (
                    <div>

                            <SignupBadgeBox className="d-flex justify-content-center align-items-center">
                                <SignupBadgeText>Sign up now!</SignupBadgeText>
                            </SignupBadgeBox>

                        {/* <SectionFourTitle className="mt-5 pt-5 text-center" >
                            Saucers that are taking off...
                        </SectionFourTitle> */}

                        <div className="row my-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="slider">
                                    <div className="slides" style={{borderTop: '1px solid #A9A9A9', borderBottom: '1px solid #A9A9A9'}}>
                                        {products.map(
                                            p => 
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
                                
                            {/* <div className="d-flex justify-content-center align-items-center">
                                <div className="d-flex align-items-center" style={{marginTop: '23px', height: '35px'}}>
                                    <span className="svg-icon svg-icon-min svg-icon-chevron-left"></span>
                                </div>
                                <div className="bottom-slider">
                                    <div className="bottom-slides">
                                        {products.map(
                                            p => 
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
                            </div> */}
                        </div>
                    </div>
                )
            }

            {/* <div className="row">
                <div className="d-flex justify-content-center align-items-center mb-5" style={{height: '35px'}}>
                    <span className="svg-icon svg-icon-min svg-icon-chevron-left"></span>
                    <span className="svg-icon svg-line svg-icon-line-active svg-line-nohover"></span>
                    <span className="svg-icon svg-line svg-icon-line"></span>
                    <span className="svg-icon svg-icon-min svg-icon-chevron-right"></span>
                </div>
            </div> */}
        </div>
    );
}

export default HomeSectionFour;

// Four
const SectionFourTitle = styled.div`
    font-weight: 400;
    font-size: 24px;

    @media (min-width: 768px)
    {
        font0size: 48px;
        line-hright: 72px;
    }
`;

const SectionFourRectangle = styled.div`
    width: 290px;
    height: 305px;
    background: #ffffff;
    margin: 0 20px;
    border-left: 1px solid #A9A9A9;
    border-right: 1px solid #A9A9A9;

    @media (min-width: 768px)
    {
        height: 317px;
    }
`;

const SectionFourRectangleText = styled.p`
    font-weight: 500;
    color: #000000;
    margin: 10px;
    font-size: 16px;

    @media (min-width: 768px)
    {
        font-size: 20px;
    }
`;

const SignupBadgeCarousel = styled.div`
    position: absolute; 
    height: 100%;
`;

const SignupBadgeBox = styled.div`
    position: absolute;
    width: 95px;
    height: 95px;
    background-image: url('/svgs/signupad2.svg');
    background-size: cover;
    background-repeat: no-repeat;
    transform: rotate(-30deg);
    padding: 0 14px;
    z-index: 1;
    margin-top: -60px;
    margin-left: 60px;

    @media (min-width: 576px)
    {
        width: 180px;
        height: 180px;
        margin-top: -125px;
    }
`;

const SignupBadgeText = styled.div`
    font-family: Poppins;
    font-weight: 700;
    font-size: 12px;
    text-align: center;
    color: #000000;
    max-width: 130px;
    white-space: normal;
    margin-top: -10px;

    @media (min-width: 576px)
    {
        font-size: 24px;
    }
`;