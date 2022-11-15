import React from 'react'
import Card from './Card';
import '../stylecomponents/cardslider.css';
import { useState } from 'react';
import { useRef } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default React.memo ( function CardSlider({data, title}) {
  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();

  // handleDirection deals with scrolling left and right on each card slider
  // using getBoundingClientRect, which returns a DOMRect object with 8 position properties
  // such as left, top, right, bottom, x, y width and height.
  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x -70;
    if(direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(${415 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
    }
    if(direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-275 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };
  return (
    <div className='cardslider_container flex column'
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div className={` slider-action left ${
          !showControls ? "none" : ""
          } flex j-center a-center`} 
        >
          <AiOutlineLeft onClick={()=> handleDirection('left')}/>
        </div>
        <div className='flex slider item' ref={listRef}>
        {data.map((movie,index) => {
            return <Card movieData={movie} index={index} key={movie.id}/>
         })}
        </div>
        <div className={`slider-action right ${
          !showControls ? "none" : ""
          } flex j-center a-center`} 
        >
          <AiOutlineRight onClick={()=> handleDirection('right')}/>
        </div>
      </div>

    </div>
  )
});




