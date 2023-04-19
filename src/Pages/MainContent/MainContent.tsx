import React from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainContent.module.css";
import DressPage from "../DressPage/DressPage";
const MainContent = (props: any) => {
  return (
    <div className={styles.main__content}>
      <Header></Header>
      <DressPage></DressPage>
    </div>
  );
};

export default MainContent;
