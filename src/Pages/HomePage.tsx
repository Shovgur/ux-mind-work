import React from "react";
import MainContent from "./MainContent/MainContent";
import styles from "./HomePage.module.css";
import Hero from "../Assets/Image/Hero.png";
import Header from "../Components/Header/Header";
import HeroSwiper from "../Components/HeroSwiper/HeroSwiper";
import SliderSwiper from "../Components/SliderSwiper/SliderSwiper";
const HomePage = (props: any) => {
  return (
    <div className={styles.container}>
      <MainContent>
        <Header></Header>
      </MainContent>
      <HeroSwiper />
      <SliderSwiper></SliderSwiper>
    </div>
  );
};

export default HomePage;
