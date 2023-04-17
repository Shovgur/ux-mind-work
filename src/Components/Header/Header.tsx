import React from "react";
import styles from "./Header.module.css";
import Badge from "@mui/material/Badge";
import { SearchIcon } from "../../Assets/icons/SearchIcon";
import { UserIcon } from "../../Assets/icons/UserIcon";
import { BasketIcon } from "../../Assets/icons/BasketIcon";
import { LikeIcon } from "../../Assets/icons/LikeIcon";
import { HeaderTextSvg } from "../../Assets/icons/HeaderTextIcon";
import MenuBurger from "../MenuBurger/MenuBurger";

const Header = (props: any) => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__menu_items}>
        <button className={styles.header__buttons}>
          {" "}
          <MenuBurger />
        </button>

        <span className={styles.header__main_text}> Каталог</span>
        <span className={styles.header__main_text}>Новинки</span>
      </div>
      <div>
        <HeaderTextSvg />
      </div>
      <div className={styles.icons}>
        <button className={styles.header__buttons}>
          <SearchIcon />
        </button>
        <button className={styles.header__buttons}>
          <UserIcon />
        </button>
        <Badge badgeContent={14} color="primary">
          <button className={styles.header__buttons}>
            <LikeIcon />
          </button>
        </Badge>
        <Badge badgeContent={7} color="warning">
          <button className={styles.header__buttons}>
            <BasketIcon />
          </button>
        </Badge>
      </div>
    </div>
  );
};

export default Header;
