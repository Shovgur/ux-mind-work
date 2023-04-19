import React from "react";
import styles from "./Footer.module.css";
import { VkIcon } from "../../Assets/icons/VkIcon";
import { YoutubeIcon } from "../../Assets/icons/YoutubeIcon";
import { TelegramIcon } from "../../Assets/icons/TelegramIcon";

const Footer = () => {
  return (
    <div className={styles.footer__container}>
      <div className={styles.footer__container_inside}>
        <div className={styles.footer__support}>
          <span>Служба поддержки</span>
          <span className={styles.footer__support_number}>8 800 755 55 05</span>
          <span className={styles.footer__support_text}>
            Отзывы и предложения
          </span>
          <span>fb@withoutfail.ru</span>
          <span className={styles.footer__support_text_2}>
            © Without Fail. 2023 г.
          </span>
        </div>
        <div className={styles.footer__info}>
          <span className={styles.footer__topic_text}>Информация</span>
          <span className={styles.footer__item_text}>Каталог одежды</span>
          <span className={styles.footer__item_text}>Новая коллекция</span>
          <span className={styles.footer__item_text}>Оплата</span>
          <span className={styles.footer__item_text}>Доставка</span>
          <span className={styles.footer__item_text}>Обмен и возврат</span>
          <span className={styles.footer__item_text}>Химчистка и уход</span>
          <div className={styles.footer__info_offer}>
            <span>Оферта</span>
            <span>Персональные данные</span>
          </div>
        </div>
        <div className={styles.footer__about}>
          <span className={styles.footer__topic_text}>О бренде</span>
          <span className={styles.footer__item_text}>Каталог одежды</span>
          <span className={styles.footer__item_text}>Новая коллекция</span>
          <span className={styles.footer__item_text}>Оплата</span>
          <span className={styles.footer__item_text}>Доставка</span>
          <span className={styles.footer__item_text}>Обмен и возврат</span>
          <span className={styles.footer__item_text}>Химчистка и уход</span>
        </div>
        <div className={styles.footer__social}>
          <span className={styles.footer__topic_text}>
            Подпишитесь на новости
          </span>
          <span className={styles.footer__item_text}>
            Получайте актуальную информацию о наших новинках и акциях
          </span>
          <div className={styles.footer__social_input_container}>
            <input className={styles.footer__social_input} type="text" />
            <button className={styles.footer__social_button}>Отправить</button>
            <div className={styles.footer__social_container}>
              <span className={styles.footer__topic_text}>Мы в соцсетях</span>
              <div className={styles.footer__social_links}>
                <a className={styles.footer__social_links_change} href="/">
                  <VkIcon />
                  ВКонтакте
                </a>
                <a className={styles.footer__social_links_change} href="/">
                  <YoutubeIcon /> Youtube
                </a>
                <a className={styles.footer__social_links_change} href="/">
                  <TelegramIcon />
                  Telegram
                </a>
              </div>
            </div>
          </div>
          <div className={styles.footer__logic}>Создание сайта Logic</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
