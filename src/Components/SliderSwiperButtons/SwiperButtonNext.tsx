import { useSwiper } from "swiper/react";
import { NextSwiperIcon } from "../../Assets/icons/NextSwiperIcon";
import styles from "./SwiperButton.module.css"

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className={styles.swiper__button_next} onClick={() => swiper.slideNext()}>
      <NextSwiperIcon />
    </button>
  );
};

export default SwiperButtonNext;
