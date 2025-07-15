// src/app/users/page.js (or .tsx if using TypeScript)
"use client"; // This component will run on the client-side

import { useState, useEffect } from "react";
import styles from "./page.module.css"; // Import the CSS module

//FRONTEND STRANICA SVIH KORISNIKA
export default function UsersPage() {
  const [users, setUsers] = useState([]); // State to store the fetched users
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to store any error messages

  useEffect(() => {
    // Function to fetch users from the API
    const fetchUsers = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        setError(null); // Clear any previous errors

        const res = await fetch("/api/users"); // Make the GET request to your API route

        if (!res.ok) {
          // If the response is not OK (e.g., 400, 500 status)
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch users");
        }

        const data = await res.json(); // Parse the JSON response
        setUsers(data); // Update the users state with the fetched data
      } catch (err) {
        console.error("Error fetching users:", err);
        setError(err.message || "An unexpected error occurred."); // Set the error message
      } finally {
        setLoading(false); // Set loading to false after fetch attempt (success or failure)
      }
    };

    fetchUsers(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array means this effect runs once after the initial render

  const handleNewUserForm = () => {};

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Baza Korisnika</h1>

        {users.length === 0 ? (
          <p className={styles.noUsersMessage}>No users found.</p>
        ) : (
          <div className={styles.tableContainer}>
            <table className={styles.userTable}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th className={styles.tableHeaderCell}>ID</th>
                  <th className={styles.tableHeaderCell}>Username</th>
                  <th className={styles.tableHeaderCell}>Role</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {users.map((user) => (
                  <tr key={user.id} className={styles.tableRow}>
                    <td className={styles.tableCell}>{user.id}</td>
                    <td className={styles.tableCell}>{user.username}</td>
                    <td className={styles.tableCell}>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <button onClick={handleNewUserForm} className={styles.loginButton}>
          Novi korisnik
        </button>
      </div>
    </div>
  );
}
