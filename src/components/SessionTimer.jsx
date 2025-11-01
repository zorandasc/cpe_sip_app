"use client";
import { useUserContext } from "@/context/UserContext";
import { useEffect, useState, useRef } from "react";

export default function SessionTimer() {
  const { expiresAt, handleLogout } = useUserContext();

  const [remaining, setRemaining] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const GRACE_PERIOD_MS = 10 * 60 * 1000; // 10 minutes

  useEffect(() => {
    if (!expiresAt) return;

    const interval = setInterval(() => {
      const diff = Number(expiresAt) - Date.now();
      setRemaining(diff);
      console.log("diff", diff);
      console.log("SHOWMODAL", showModal);

      if (diff < GRACE_PERIOD_MS && diff > 0) {
        setShowModal(true);
      }
      if (diff <= 0) {
        clearInterval(interval);
        handleLogout();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  if (!remaining) return null;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "2000",
        bottom: "10%",
        left: "0",
        backgroundColor: "whitesmoke",
        color: "black",
        padding:"0.4rem"
      }}
    >
      Session expires in {minutes}:{seconds.toString().padStart(2, "0")}
    </div>
  );
}
