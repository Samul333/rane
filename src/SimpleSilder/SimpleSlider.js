import React, { Component } from "react";
import Slider from 'react-slick'
import SilderContent from "./SilderContent";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 2000,

    };
    return (
      <div>
       
        <Slider {...settings}>
          
             <SilderContent 
             title="RISK & SECURITY PROFESSIONALS"
             subtitle="Gain access to industry experts, unique insights, and knowledge-sharing events"
             img="https://image.shutterstock.com/image-vector/business-man-entrepreneur-suit-working-600w-421282051.jpg"/>
            
            
             <SilderContent
             img="https://image.shutterstock.com/image-vector/business-man-entrepreneur-suit-working-600w-421282051.jpg"
             title="RISK EXPERTS & SERVICE PROVIDERS"
             subtitle="Extend your marketing reach, connect with leading companies, and build your brand"/>
        
          
        </Slider>
      </div>
    );
  }
}