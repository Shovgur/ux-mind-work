import React from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainContent.module.css"
const MainContent = (props: any) => {
  return (
    <div className={styles.main__content}>
    <Header></Header>
    </div>
  );
};

export default MainContent;
