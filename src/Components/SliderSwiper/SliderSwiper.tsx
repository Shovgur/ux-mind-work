import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../../Assets/Image/Hero.png";

import "swiper/css";

import styles from "./SliderSwiper.module.css";

const SliderSwiper = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <img src={Hero} alt="Error" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Hero} alt="Error"></img>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderSwiper;
