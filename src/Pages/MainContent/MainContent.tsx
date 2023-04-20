import React from "react";
import Header from "../../Components/Header/Header";
import styles from "./MainContent.module.css";
import DressPage from "../DressPage/DressPage";
import { useState } from "react";
import { Sort } from "../../Const";

const MainContent = (props: any) => {

  const [sort, setSort] = useState(Sort.PRICEUP);
  
  return (
    <div className={styles.main__content}>
      <Header></Header>
      <DressPage sort={sort} setSort={setSort}></DressPage>
    </div>
  );
};

export default MainContent;
