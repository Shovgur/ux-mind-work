import React from "react";
import MainContent from "./MainContent/MainContent";
import styles from "./HomePage.module.css";
import Header from "../Components/Header/Header";
import HeroSwiper from "../Components/HeroSwiper/HeroSwiper";
import Footer from "../Components/Footer/Footer";
import DressPage from "./DressPage/DressPage";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <MainContent></MainContent>
    </div>
  );
};

export default HomePage;
