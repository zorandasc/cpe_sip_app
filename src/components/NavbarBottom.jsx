"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbarBottom.module.css"; // Adjust the path as necessary

import Link from "next/link";
import { usePathname } from "next/navigation";

import HomeIcon from "./icons/HomeIcon";
import UsersIcon from "./icons/UsersIcon";
import ExitIcon from "./icons/ExitIcon";
import UserIcon from "./icons/UserIcon";
import SearchIcon from "./icons/SearchIcon";

import { useUserContext } from "@/context/UserContext";

const NavbarBottom = () => {
  const pathname = usePathname();

  const { user, expiresAt, handleLogout } = useUserContext();

  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (!expiresAt) return;
    //INTERVALNA PROVJERA ISTEKA SESIJE KORISNIKA
    const interval = setInterval(() => {
      const diff = Number(expiresAt) - Date.now();
      setRemaining(diff);

      if (diff <= 0) {
        //SESIJA ISTEKLA, LOGOUT
        clearInterval(interval);
        handleLogout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {user && (
          <li
            className={styles.user}
            title="Korisnik admin. Vaša sesija ističe za:"
          >
            <UserIcon></UserIcon>
            <p>{user?.username}</p>
            <p>
              (⏳{minutes}:{seconds.toString().padStart(2, "0")})
            </p>
          </li>
        )}
        <li
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        <li
          className={`${styles.link} ${
            pathname === "/load" ? styles.active : ""
          }`}
        >
          <Link href="/load">
            <SearchIcon></SearchIcon>
          </Link>
        </li>

        {user && user.role === "admin" && (
          <li
            className={`${styles.link} ${
              pathname === "/users" ? styles.active : ""
            }`}
          >
            <Link href="/users">
              <UsersIcon></UsersIcon>
            </Link>
          </li>
        )}
        {user && (
          <li
            className={`${styles.link} ${
              pathname === "/login" ? styles.active : ""
            }`}
          >
            <button onClick={handleLogout} style={{ cursor: "pointer" }}>
              <ExitIcon></ExitIcon>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavbarBottom;
