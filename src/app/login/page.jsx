"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./page.module.css";
import Notification from "../../components/Notification";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //notification je oblika { message: '', type: '' }
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        setNotification({
          message: data.error || "Login failed",
          type: "error",
        });
        return;
      }
      setNotification({
        message: `${data.message}. "Happy Hunting".`,
        type: "success",
      });
      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (err) {
      console.log("Something went wrong", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className={styles.pageContainer}>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onDismiss={() => setNotification(null)} // Clear notification state when it dismisses itself
        />
      )}
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
