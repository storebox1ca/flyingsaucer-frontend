import React, { Children, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import "../../styles/Carousel.css";

export const CarouselItem = ({ children, width, path }) => {
  return (
    <div className="carousel-item2 d-inline-block"  style={{  width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators d-flex align-items-center" style={{marginTop: '-60px', marginLeft: '50px', position: 'absolute' ,zIndex: '100000'}}>
        {/* <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button> */}
        {React.Children.map(children, (child, index) => {
          return (
            index === activeIndex ?
                (<button style={{borderRadius: '12px', width: '24px', height: '24px', backgroundColor: 'rgba(217, 217, 217, 0.5)', border: '0'}}
                >
                </button>)
                :
                (<button style={{borderRadius: '8px', width: '16px', height: '16px', backgroundColor: 'rgba(217, 217, 217, 0.5)', border: '0'}}
                onClick={() => {
                    updateIndex(index);
                }}
                >
                </button>)

          );
        })}
        {/* <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Carousel;
