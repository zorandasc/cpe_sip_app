"use client";
import React from "react";
import styles from "./navbarBottom.module.css"; // Adjust the path as necessary

import Link from "next/link";
import { usePathname } from "next/navigation";

import toast from "react-hot-toast";

import HomeIcon from "./HomeIcon";
import UsersIcon from "./UsersIcon";
import ExitIcon from "./ExitIcon";
import UserIcon from "./UserIcon";

import { useUserContext } from "@/context/UserContext";

const NavbarBottom = () => {
  const pathname = usePathname();

  const { user } = useUserContext();

  //POSALJI REQUEST SERVERU PREMA API RUTI /api/logout
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
        // Redirect to login page or home page after successful logout
        toast.success("Buy, buy.");

        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
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
            <button onClick={handleLogout}>
              <ExitIcon></ExitIcon>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavbarBottom;
