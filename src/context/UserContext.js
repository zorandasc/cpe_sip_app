"use client";

import { createContext, useContext, useEffect, useState } from "react";

//UserProvider's useEffect (Primary Source of Truth):
//Your UserProvider (from the user-context immersive) has a useEffect that
// runs once when the component mounts. Inside this useEffect, it calls /api/me.
// This /api/me route is designed to read the httpOnly cookie
// (which the browser automatically sends), verify the JWT,
// and return the user's data if they are authenticated.

//KONTEKST
const UserContext = createContext(undefined);

//FUNKCIJA KOJU MOGU DA KORISTE DRUGE KOMPONENTE
//ZA DOBAVLJANJE KONTEKSTA
export function useUserContext() {
  return useContext(UserContext);
}

//WRAPPER ZA DEFINISANJE GLOBALNOG KONTEXSTA
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoadingUser(true);
        const res = await fetch("/api/me");

        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setUser(null); // On error, assume no user is logged in
      } finally {
        setLoadingUser(false);
      }
    };
    fetchUser();
  }, []);

  // You can optionally render a loading spinner or null while user data is being fetched
  if (loadingUser) {
    return <div className="loading-screen">Loading application...</div>;
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
