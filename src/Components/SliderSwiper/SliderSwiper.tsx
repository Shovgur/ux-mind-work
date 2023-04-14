import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "../../Assets/Image/Hero.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SliderSwiper = () => {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
    >
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
