import React from "react";
import styles from "./MenuBurger.module.css";

const MenuBurger = () => {
  return (
    <div className={styles.burger__container}>
      <div className={styles.burger__container_small_line_first}></div>
      <div className={styles.burger__container_big_line}></div>
      <div className={styles.burger__container_small_line_second}></div>
    </div>
  );
};

export default MenuBurger;
