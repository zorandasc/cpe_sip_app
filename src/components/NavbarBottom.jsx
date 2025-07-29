"use client";
import React from "react";
import styles from "./navbarBottom.module.css"; // Adjust the path as necessary

import Link from "next/link";
import { usePathname } from "next/navigation";

import toast from "react-hot-toast";

import HomeIcon from "./icons/HomeIcon";
import UsersIcon from "./icons/UsersIcon";
import ExitIcon from "./icons/ExitIcon";
import UserIcon from "./icons/UserIcon";
import SearchIcon from "./icons/SearchIcon";

import { useUserContext } from "@/context/UserContext";

const NavbarBottom = () => {
  const pathname = usePathname();

  const { user } = useUserContext();

  //LOGOUT, POSALJI REQUEST SERVERU PREMA API RUTI /api/logout
  //KOJA CE DA OBRISE JWT TOKEN
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        toast.success("Buy, buy.");

        //NAVIGACIJA PREMA LOGIN PAGE
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
      toast.error(`Error during logout: ${error}`);
    }
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        {user && (
          <li className={styles.user}>
            <UserIcon></UserIcon>
            <p>{user?.username}</p>
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
        <li
          className={`${styles.link} ${
            pathname === "/imageGrid" ? styles.active : ""
          }`}
        >
          <Link href="/imageGrid">
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
