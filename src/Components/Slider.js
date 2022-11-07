import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Pagination } from "swiper";

//import images
import Summer from '../image/Summer.jpeg';
import Winter from '../image/Winter.png';
import Accessories from '../image/Accessories.png';
import Sale from '../image/sale.png';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-text">
            <h1>Slide S</h1>
            <p>Slide 1</p>
            <h5>Slide 1</h5>
          </div>
          <img src={Summer} alt={"picture"} className={'images'}/>
          </SwiperSlide>
        <SwiperSlide>
          <div className="slider-text">
            <h1>Slide W</h1>
            <p>Slide 1</p>
            <h5>Slide 1</h5>
          </div>
          <img src={Winter} alt={"picture"}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-text">
            <h1>Slide A</h1>
            <p>Slide 1</p>
            <h5>Slide 1</h5>
          </div>
          <img src={Accessories} alt={"picture"} className={'images'}/>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-text">
            <h1>Slide 1</h1>
            <p>Slide 1</p>
            <h5>Slide 1</h5>
          </div>
          <img src={Sale} alt={"picture"} className={'images'}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
