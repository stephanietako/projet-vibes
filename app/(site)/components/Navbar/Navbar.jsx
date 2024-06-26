"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Styles
import styles from "./styles.module.scss";
import logo from "@/public/assets/vibes.png";
import cart from "@/public/assets/cart.png";
import CartBtn from "../CartBtn/Cartbtn";
import AccountProfil from "../AccountProfil/AccountProfil";
// import Contact from "../Contact/Contact";

const navLinks = [
  { name: "Guide du CBD", href: "/" },
  { name: "Qui sommes-nous", href: "/" },
  { name: "Contact", href: "/" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.__navbar_container}>
          <div className={styles.__logo}>
            <a href="/">
              <Image
                className={styles.__img}
                src={logo}
                alt="Boutique Vibes CBD Saint-Troez "
                width={70}
                height={70}
                style={{
                  display: "block",
                  objectFit: "cover",
                  width: "auto",
                  height: "auto",
                }}
              />
            </a>
          </div>
          <div className={styles.__link_navbar}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? `${styles.active_link} ${styles.autre_classe_link_hover_transition}`
                      : styles.autre_classe_link_hover_transition
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </div>
          <span className={styles.__link_navbar_user_cart}>
            {" "}
            <div>
              <AccountProfil />
            </div>
            <div className={styles.btn_cart}>
              <CartBtn img={cart} />
            </div>
          </span>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
