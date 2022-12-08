import React, { useEffect, useState } from "react";
import styled from "styled-components";

function HomeSectionFour() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
      }, []);

    function getProducts() {
        fetch(`${process.env.REACT_APP_BACKEND}api/products`)
          .then(res => res.json())
          .then(data => {
            setProducts(data.data);
          })
      }

    return (
        <div>
            {/* Four */}                    
            {products.length > 0 &&
                (
                    <div>
                        <SectionFourTitle className="mt-5 pt-5 text-center" >
                            Saucers that are taking off...
                        </SectionFourTitle>

                        <div className="row my-5">
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="slider">
                                    <div className="slides">
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
                                
                            <div className="d-flex justify-content-center align-items-center">
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
                            </div>
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