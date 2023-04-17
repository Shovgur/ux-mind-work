import { useSwiper } from "swiper/react";
import { PrevSwiperIcon } from "../../Assets/icons/PrevSwiperIcon";
import styles from "./SwiperButton.module.css"
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className={styles.swiper__button_prev} onClick={() => swiper.slidePrev()}>
      <PrevSwiperIcon />
    </button>
  );
};

export default SwiperButtonPrev;
