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
        <MenuBurger/>
        <span className={styles.header__main_text}>Каталог</span>
        <span className={styles.header__main_text}>Новинки</span>
      </div>
      <div>
        <HeaderTextSvg />
      </div>
      <div className={styles.icons}>
        <SearchIcon />
        <UserIcon />
        <Badge badgeContent={14} color="primary">
          <LikeIcon />
        </Badge>
        <Badge badgeContent={7} color="warning">
          <BasketIcon />
        </Badge>
      </div>
    </div>
  );
};

export default Header;
