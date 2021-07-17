import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ res }) => {  

  return (
    <Carousel className="w-0" slide={false} fade={false}>
      {res.map((img, index) => (
        <Carousel.Item style={{width:"20em", maxHeight:'25em'}} key={index}>
          <img height="300" width="320" src={img.url} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
