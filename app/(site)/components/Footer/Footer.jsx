import React from "react";
import Link from "next/link";
// Styles
import styles from "./styles.module.scss";
// Assets
import logo from "@/public/logo192.png";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className={styles.footer}>
      <footer className={styles.__container}>
        <ul>
          <li>
            <div className={styles.__logo}>
              <a href="/">
                <Image className={styles.__img} src={logo} alt="les fleurs" />
              </a>
            </div>
          </li>
          <li>
            <p>VIBES CBD</p>
          </li>
          <li>
            <p>Mentions légales</p>
          </li>
          <li>
            <div className={styles.__copyright}>
              &#169; Copyright {currentYear} | Tako Dev
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
