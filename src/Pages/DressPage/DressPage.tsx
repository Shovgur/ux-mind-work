import React from "react";
import styles from "./DressPage.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Stack,
  Radio,
  Text,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "../../Assets/icons/ChevronIcon";
import { Sort } from "../../Const";
import { Dispatch, SetStateAction } from "react";
import { categoryButtons } from "../../Const/data";
import { checkBoxArray } from "../../Const/data";
import { radioArray } from "../../Const/data";

type FilterProps = {
  sort: Sort;
  setSort: Dispatch<SetStateAction<Sort>>;
};

const DressPage = ({ sort, setSort }: FilterProps) => {
  const menuItems = [{ name: Sort.PRICEUP }, { name: Sort.PRICEDOWN }];
  const handleMenuItemClick = (item: Sort) => {
    setSort(item);
  };

  const renderRadioList = () =>
    radioArray.map((value, index) => <Radio key={index}>{value.name}</Radio>);

  const renderCheckboxList = () =>
    checkBoxArray.map((value, index) => (
      <Checkbox
        fontWeight="500"
        fontSize="14px"
        lineHeight="20px"
        type="checkbox"
        key={index}
      >
        {value.name}
      </Checkbox>
    ));

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
        <div>
          <span className={styles.dresspage__info_fonts}>Сортировать по:</span>
          <Menu>
            <MenuButton
              borderRadius={2}
              width={204}
              h={34}
              ml={24}
              p={10}
              borderColor="#5555"
              background="none"
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {sort}
            </MenuButton>
            <MenuList>
              {menuItems.map((item) => {
                const { name } = item;
                return (
                  <MenuItem
                    onClick={() => handleMenuItemClick(name)}
                    key={name}
                  >
                    {name}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className={styles.dresspage__filter}>
        <span className={styles.dresspage__filter_font}>Платья</span>
        <div className={styles.dresspage__filter_category}>
          {categoryButtons.map((value, index) => (
            <Button
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              key={index}
              h={34}
              border="none"
              cursor="pointer"
              bgColor="white"
              _hover={{ bg: "#ebedf0" }}
              _active={{
                bg: "#dddfe2",
                transform: "scale(0.98)",
              }}
            >
              {value.name}
            </Button>
          ))}
        </div>
        <div className={styles.dresspage__filter_checkbox}>
          <Text mt={20}> Размеры </Text>
          <Stack gap={16}>{renderCheckboxList()}</Stack>
        </div>
        <div className={styles.dresspage__filter_radio}>
          <Text mt={20}> Цвета </Text>
          <Stack gap={18}>{renderRadioList()}</Stack>
        </div>
        <div className={styles.dresspage__filter_price}>
          <Text>Цена</Text>
          <Flex gap={10} alignItems="center" display="flex" direction="row">
            <input
              placeholder="от 9500"
              className={styles.dresspage__filter_price_input}
              type="text"
            />
            <div className={styles.dresspage__filter_price_line}></div>
            <input
              placeholder="до 46000"
              className={styles.dresspage__filter_price_input}
              type="text"
            />
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default DressPage;
