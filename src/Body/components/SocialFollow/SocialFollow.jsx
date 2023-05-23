import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import styles from './style.module.scss'

export const SocialFollow = () => {
  return (
    <div className={styles.socialList}>
      <a
        href="https://vk.com/bohostyle1https://vk.com/bohostyle1"
        className="Vk social"
      >
        <FontAwesomeIcon icon={faVk} size="2x" />
      </a>
      <a
        href="https://t.me/TatianaBrynceva"
        className="Telegram social"
      >
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a
        href="https://instagram.com/tatianabrynceva"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
};
