"use client";
import React from "react";
import styles from "./navbarBottom.module.css"; // Adjust the path as necessary
import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeIcon from "./HomeIcon";
import UsersIcon from "./UsersIcon";

const NavbarBottom = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>

        <li
          className={`${styles.link} ${
            pathname === "/users" ? styles.active : ""
          }`}
        >
          <Link href="/users">
            <UsersIcon></UsersIcon>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarBottom;
