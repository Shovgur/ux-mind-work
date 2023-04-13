import React from "react";
import styles from "./HeroSwiper.module.css";
import { PrevSwiperIcon } from "../../Assets/icons/PrevSwiperIcon";
import { NextSwiperIcon } from "../../Assets/icons/NextSwiperIcon";

const HeroSwiper = () => {
  return (
    <div className={styles.heroswiper__container}>
      <div className={styles.prevswiper__icon}><PrevSwiperIcon/></div>
      <div className={styles.herowswiper__container_text}> 
        <span className={styles.heroswiper__text_first}>весна-лето</span>
        <div className={styles.heroswiper__line}></div>
        <span className={styles.heroswiper__text_second}>новая колекция</span>

      </div>
      <div className={styles.nextswiper__icon}><NextSwiperIcon/></div>
    </div>
  );
};

export default HeroSwiper;
