"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useUserContext } from "@/context/UserContext";

const SessionToastContent = ({ remaining, onClose }) => {
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div>
      <p>
        ⏳ Vaša sesija ističe za: {minutes}:{seconds.toString().padStart(2, "0")}
      </p>
      <button
        onClick={onClose}
        style={{
          marginTop: "12px",
          background: "#333",
          color: "#fff",
          padding: "4px 8px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Zatvori
      </button>
    </div>
  );
};

const SessionToast = () => {
  const toastIdRef = useRef(null);
  const { expiresAt, handleLogout } = useUserContext();
  const [toastOpen, setToastOpen] = useState(false);

  //INTERVALNA PROVJERA ISTEKA SESIJE KORISNIKA
  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      const diff = Number(expiresAt) - Date.now();

      // Show toast initially when session < 5min
      if (diff <= 1 * 60 * 1000 && diff > 0 && toastIdRef.current === null) {
        toastIdRef.current = toast(
          <SessionToastContent
            remaining={diff}
            onClose={() => toast.dismiss(toastIdRef.current)}
          />,
          {
            duration: Infinity,
            id: "session-warning",
            position: "top-center",
            style: {
              background: "linear-gradient(to bottom, #5c2642ff, #ff0084)",
              color: "whitesmoke",
              fontSize: "1rem",
            },
          }
        );
        setToastOpen(true);
      }

      // Update toast content only if it’s still open
      if (toastOpen && diff > 0) {
        toast(
          <SessionToastContent
            remaining={diff}
            onClose={() => {
              toast.dismiss(toastIdRef.current);
              setToastOpen(false);
            }}
          />,
          {
            id: toastIdRef.current,
          }
        );
      }

      // Session expired
      if (diff <= 0) {
        clearInterval(interval);
        toast.dismiss(toastIdRef.current);
        handleLogout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt, handleLogout, toastOpen]);

  return null; // this component renders nothing itself, only the toast
};

export default SessionToast;
