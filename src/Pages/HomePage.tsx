import React from "react";
import MainContent from "./MainContent/MainContent";
import styles from "./HomePage.module.css";
import Header from "../Components/Header/Header";
import HeroSwiper from "../Components/HeroSwiper/HeroSwiper";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <MainContent>
        <Header></Header>
      </MainContent>
      <HeroSwiper />
    </div>
  );
};

export default HomePage;
