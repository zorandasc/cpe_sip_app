"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useUserContext } from "@/context/UserContext";
import { toast } from "react-hot-toast";

//FRONTEND STRANICA ZA LOGOVANJE
export default function LoginPage() {
  const { setUser, setExpiresAt } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`Login failed: ${data.message}`, {
          position: "top-left",
        });

        return;
      }

      toast.success(`${data.message}. 'Happy Hunting'`, {
        position: "top-left",
      });

      // OPTIMIZATION: update CONTEXT LOGOVANIM KORISNIKOM
      setUser(data.user);
      //SAVE TOKEN EXPIRATION TO CONTEXT AND LOCALSTORAGE
      setExpiresAt(Number(data.expiresAt));

      //NAVIGACIJA PREMA HOME PAGE
      setTimeout(() => {
        window.location.href = "/";
      }, 1200);
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`, {
        position: "top-left",
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Dobro došli!</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          ></input>
          <input
            type="password"
            id="password"
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
