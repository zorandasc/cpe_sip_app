"use client";
import React, { useEffect, useState } from "react";
import styles from "./Notification.module.css";

const Notification = ({ message, type, duration = 3000, onDismiss }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (message) {
      setShouldRender(true); // Start rendering the component
      const timer = setTimeout(() => {
        setIsVisible(true); // Start fade-in
      }, 50); // Small delay to allow CSS transition

      const hideTimer = setTimeout(() => {
        setIsVisible(false); // Start fade-out
        // After fade-out, actually remove from DOM
        const removeTimer = setTimeout(() => {
          setShouldRender(false);
          if (onDismiss) {
            onDismiss();
          }
        }, 500); // Wait for fade-out transition (0.5s in CSS)
      }, duration);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    } else {
      setIsVisible(false);
      setShouldRender(false);
    }
  }, [message, duration, onDismiss]);

  if (!shouldRender) {
    return null;
  }
  return (
    <div
      className={`${styles.notification} ${styles[type]} ${
        isVisible ? styles.show : styles.hide
      }`}
    >
      {message}
    </div>
  );
};
export default Notification;
