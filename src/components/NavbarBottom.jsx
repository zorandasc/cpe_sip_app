"use client";
import React from "react";

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

  const { user, handleLogout } = useUserContext();

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
          </li>
        )}
        <li
          title="Create New Config File"
          className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        >
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        <li
          title="Find And Edit"
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
            title="Database Of Users"
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
            title="Exit App"
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
