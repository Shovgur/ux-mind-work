import React from "react";
import styles from "./HeroSwiper.module.css";
import "swiper/css";
import "swiper/css/scrollbar";
import Hero from "../../Assets/Image/Hero.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import SwiperButtonNext from "../SliderSwiperButtons/SwiperButtonNext";
import SwiperButtonPrev from "../SliderSwiperButtons/SwiperButtonPrev";

const HeroSwiper = () => {
  return (
    <Swiper
      scrollbar={{ dragSize: 90}}
      modules={[Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className={styles.heroswiper__container}>
          <SwiperButtonPrev />
          <div className={styles.herowswiper__container_text}>
            <span className={styles.heroswiper__text_first}>
              весна-лето ‘23
            </span>
            <div className={styles.heroswiper__line}></div>
            <span className={styles.heroswiper__text_second}>
              новая колекция
            </span>
          </div>
          <SwiperButtonNext />
        </div>
        <img src={Hero} alt="Error" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.heroswiper__container}>
          <SwiperButtonPrev />
          <div className={styles.herowswiper__container_text}>
            <span className={styles.heroswiper__text_first}>
              весна-лето ‘23
            </span>
            <div className={styles.heroswiper__line}></div>
            <span className={styles.heroswiper__text_second}>
              новая колекция
            </span>
          </div>
          <SwiperButtonNext />
        </div>
        <img src={Hero} alt="Error" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSwiper;
