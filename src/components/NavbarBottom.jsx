"use client";
import React from "react";
import styles from "./navbarBottom.module.css"; // Adjust the path as necessary
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import HomeIcon from "./HomeIcon";
import UsersIcon from "./UsersIcon";
import ExitIcon from "./ExitIcon";

const NavbarBottom = () => {
  const router = useRouter();
  const pathname = usePathname();

  //POSALJI REQUEST SERVERU DA OBRISE TOKEN
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        // Redirect to login page or home page after successful logout
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

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
        <li
          className={`${styles.link} ${
            pathname === "/login" ? styles.active : ""
          }`}
        >
          <button onClick={handleLogout}>
            <ExitIcon></ExitIcon>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarBottom;
