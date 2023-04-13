import React from "react";
import MainContent from "./MainContent/MainContent";
import styles from "./HomePage.module.css";
import Hero from "../Assets/Image/Hero.png";
import Header from "../Components/Header/Header";
import HeroSwiper from "../Components/HeroSwiper/HeroSwiper";

const image = {
  width: 1600,
  height: 720,
};

const HomePage = (props: any) => {
  return (
    <div className={styles.container}>
      <HeroSwiper></HeroSwiper>
      <MainContent></MainContent>
      <img style={image} src={Hero} alt="Error"></img>
    </div>
  );
};

export default HomePage;
