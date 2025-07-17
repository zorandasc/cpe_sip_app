"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useUserContext } from "@/context/UserContext";
import toast from "react-hot-toast";

//FRONTEND STRANICA ZA LOGOVANJE
export default function LoginPage() {
  const { setUser } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`Login failed: ${data.message}`);

        return;
      }

      toast.success(`${data.message}. 'Happy Hunting'`);

      // OPTIMIZATION: update CONTEXT LOGOVANIM KORISNIKOM
      setUser(data.user);

      //NAVIGACIJA PREMA HOME PAGE
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Dobro došli u CPE SIP Aplikaciju</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          ></input>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
