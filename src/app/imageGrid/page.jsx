"use client";
import Image from "next/image";
import { useState } from "react";
import { phones } from "@/utils/phoneOptions";
import styles from "./imageGrid.module.css";

export default function ImageGrid() {
  const [selectedPhone, setSelectedPhone] = useState(null);

  return (
    <main className={styles.main}>
      <ul className={styles.list}>
        {phones.map((item) => (
          <li
            key={item.name}
            onClick={() => setSelectedPhone(item)}
            className={`${styles.item} ${
              selectedPhone?.name === item.name ? styles.selectedItem : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.name}
              layout="fill"
              objectFit="cover"
              className={styles.image}
              priority
            />
            <div className={styles.overlay}>{item.name}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}
