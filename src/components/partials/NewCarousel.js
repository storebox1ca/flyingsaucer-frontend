import React, { Children, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "../../styles/Carousel.css";

const Carousel = () => {


  return (
    <div
      className="carousel"
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${2 * 100}%)` }}
      >
        <div className="d-inline-block w-100">123</div>
        <div className="d-inline-block w-100">456</div>
        <div className="d-inline-block w-100">789</div>
      </div>

      <div className="indicators">
        <button
        >
          Prev
        </button>
        <button
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
