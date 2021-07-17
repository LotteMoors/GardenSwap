import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ res }) => {  

  return (
    <>
    {res !== undefined? 
    <Carousel className="w-0" slide={false} fade={false} interval={null}>
      {res.map((img, index) => (
        <Carousel.Item style={{width:"20em", maxHeight:'25em'}} key={index}>
          <img height="300" width="320" src={img.url} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
    : null}
    </>
  );
};

export default Slider;
