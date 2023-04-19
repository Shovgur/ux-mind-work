import React from "react";
import Header from "../../Components/Header/Header";
import styles from "./DressPage.module.css";
import MainContent from "../MainContent/MainContent";

const DressPage = () => {
  return (
    <div className={styles.dresspage__container}>
      <div className={styles.dresspage__info}>
        <div className={styles.dresspage__info_first}>
        <span className={styles.dresspage__info_fonts}>Главная</span>
        <div className={styles.dresspage__info_vetrtical_line}></div>
        <span className={styles.dresspage__info_fonts}>Каталог</span>
        <div className={styles.dresspage__info_vetrtical_line}></div>
        <span className={styles.dresspage__info_fonts}>Платья </span>
        </div>
        <div className={styles.dresspage__info_sorting}>
          <span className={styles.dresspage__info_fonts}>Сортировать по:</span>
        </div>
      </div>
    </div>
  );
};

export default DressPage;
