import React from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FacebookLogo size={32} />
        </li>
        <li>
          <InstagramLogo size={32} />
        </li>
        <li>
          <LinkedinLogo size={32} />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;
