"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import toast from "react-hot-toast";
import SendIcon from "@/components/icons/SendIcon";

//FRONTEND HOME STRANICA
export default function Home() {
  //INICIJALNI STATE
  const [selectedPhone, setSelectedPhone] = useState({
    name: "Grandstream",
    port: 1,
  });
  const [mac, setMac] = useState("");
  const [macErrorMessage, setMacErrorMessage] = useState(null);

  // portConfig je oblika { sifra: '', brojTelefona: '' }
  //i predstavlja port uredjaja
  const [portConfigs, setPortConfigs] = useState([
    {
      sifra: "",
      brojTelefona: "",
    },
  ]);
  const [portValidationErrors, setPortValidationErrors] = useState({});

  const phones = [
    { name: "Grandstream", port: 1 },
    { name: "SIP telefon (model:GXP_1625)", port: 1 },
    { name: "4-portni RGW (model:HT814)", port: 4 },
    { name: "8-portni RGW (model:HT818)", port: 8 },
    { name: "16-portni RGW (model:GXW4216)", port: 16 },
    { name: "24-portni RGW (model:GXW4224)", port: 24 },
  ];

  const handlePhoneSelect = (item) => {
    //PRIKAZI FORMU IZABRANOG TELEFONA
    setSelectedPhone(item);

    //INICIJALIZUJ SVA POLJA NA CISTO. MAC I PORTOVE
    setMac("");
    const initialPortConfigs = Array.from({ length: item.port }, () => ({
      sifra: "",
      brojTelefona: "",
    }));
    setPortConfigs(initialPortConfigs);
    setPortValidationErrors({});
  };

  const handleMacChange = (e) => {
    let value = e.target.value;

    // 2. Convert to uppercase for consistency in display
    value = value.toUpperCase();

    const originalValue = value;

    // 1. Remove any characters that are not hex digits, colons, or hyphens
    value = value.replace(/[^0-9a-fA-F:-]/g, "");

    setMac(value);

    let currentErrorMessage = null;

    if (originalValue !== value) {
      currentErrorMessage =
        "Dozvoljeni su samo heksadecimalni karakteri (0-9, A-F), dvotačke (:) ili crtice (-).";

      toast("Nevažeći karakteri uklonjeni.");
    }

    const cleanedMacLength = getCleanMac(value).length;

    if (cleanedMacLength > 0 && cleanedMacLength !== 12) {
      // If there's already an "invalid chars" message, prioritize it
      // otherwise, show the "incorrect length" message
      if (!currentErrorMessage) {
        // Only set this if no other error is present
        currentErrorMessage =
          "MAC adresa mora imati tačno 12 heksadecimalnih karaktera.";
      }
    }
    console.log(currentErrorMessage);
    setMacErrorMessage(currentErrorMessage);
  };

  // Function to get a cleaned MAC address (12 hex digits)
  const getCleanMac = (rawMac) => {
    return rawMac.replace(/[^0-9a-fA-F]/g, "").toLowerCase();
  };

  const handlePortInputChange = (index, fieldName, value) => {
    const updatedPortConfigs = portConfigs.map((config, i) => {
      if (index === i) {
        return { ...config, [fieldName]: value };
      }
      return config;
    });

    const isBrojTelefonaEmpty =
      updatedPortConfigs[index].brojTelefona.trim() === "";
    const isSifraEmpty = updatedPortConfigs[index].sifra.trim() === "";

    let newErrors = { ...portValidationErrors }; // Copy current errors

    // Validation logic: If one is empty and the other is not
    if (
      (isBrojTelefonaEmpty && !isSifraEmpty) ||
      (!isBrojTelefonaEmpty && isSifraEmpty)
    ) {
      newErrors[index] =
        "Oba polja (Šifra i Broj Telefona) moraju biti ili prazna ili popunjena.";
    } else {
      // Clear error for this port if it's now valid
      delete newErrors[index];
    }

    setPortConfigs(updatedPortConfigs);
    setPortValidationErrors(newErrors);
  };

  //POSALJI PODATKE PREMA API RUTI /api/save-xml-config
  //TA RUTA CE SACUVATI .xml FAJL U LOKALNI FOLDER
  const handleSubmit = async (e) => {
    e.preventDefault();

    //VALIDACIJA
    if (!selectedPhone) {
      toast.error("Molimo odaberite model telefona.");
      return;
    }

    const cleanedMac = getCleanMac(mac);

    if (cleanedMac.length !== 12) {
      setMacErrorMessage(
        "MAC adresa mora imati tačno 12 heksadecimalnih karaktera."
      );

      //SCROLL WINDOWS DO MAC ADDRES POLJA
      //DA KORISNIK VIDI GDIJE JE GRESKA
      document
        .getElementById("mac")
        .scrollIntoView({ behavior: "smooth", block: "center" });

      toast.error("MAC adresa je nevažeća.");
      return;
    } else {
      // AKO VALIDACIJA PRODJE, OBRISI GRESKU
      setMacErrorMessage(null);
    }

    //PRIPREMA PODATAKA ZA SLANJE
    const formData = {
      selectedPhone,
      mac: cleanedMac,
      portConfigs,
    };

    try {
      const response = await fetch("/api/xml-save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        toast.success(`${data.message}.`, {
          duration: 4000,
          position: "top-left",
        });
        console.log("Server response:", data);

        //reset form after successful save
        handlePhoneSelect(selectedPhone);
      } else {
        const errorData = await response.json();

        toast.error(`Greška pri čuvanju konfiguracije: ${errorData.message}`);
        console.error("Server error:", errorData);
      }
    } catch (error) {
      console.error("Network or client-side error:", error);

      toast.error(`Došlo je do greške pri komunikaciji sa serverom:${error}`);
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>CPE SIP APLIKACIJA</h1>
      <h2 className={styles.subtitle}>
        Kreiranje konfiguracionih .xml fajlova za sip telefone
      </h2>
      <main className={styles.main}>
        {/* List of phone models for selection */}
        <ul className={styles.list}>
          {phones.map((item) => (
            <li
              key={item.name} // Use item.name or a unique ID if available for key
              className={`${styles.item} ${
                selectedPhone && selectedPhone.name === item.name
                  ? styles.selectedItem
                  : ""
              }`}
              onClick={() => handlePhoneSelect(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        {/* Display form only if a phone is selected */}
        {selectedPhone && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <h3>Konfiguracija za: {selectedPhone.name}</h3>
            <div className={styles.macField}>
              <label htmlFor="mac">MAC Adresa:</label>
              <input
                type="text"
                id="mac"
                value={mac}
                onChange={handleMacChange}
                required
                placeholder="Npr. AA:BB:CC:DD:EE:FF"
                className={macErrorMessage ? styles.inputError : ""}
              />
              {macErrorMessage && (
                <p className={styles.errorMessage}>{macErrorMessage}</p>
              )}
            </div>
            {/* Dynamically render input fields based on selectedPhone.port */}
            {portConfigs.map((config, index) => (
              <div key={index} className={styles.portGroup}>
                {selectedPhone.port > 1 && (
                  <h4 className={styles.portHeading}>Port {index + 1}</h4>
                )}
                <div>
                  <label htmlFor={`brojTelefona-${index}`}>
                    Broj Telefona:
                  </label>
                  <div className={styles.phoneInputContainer}>
                    <span className={styles.phonePrefix}>+387</span>
                    <input
                      type="tel"
                      pattern="[0-9]*"
                      id={`brojTelefona-${index}`}
                      value={config.brojTelefona}
                      placeholder="Npr. 51123456"
                      minLength={8}
                      maxLength={8}
                      onChange={(e) =>
                        handlePortInputChange(
                          index,
                          "brojTelefona",
                          e.target.value
                        )
                      }
                    />
                    <span className={styles.phonePrefix}>@mtel.ba</span>
                  </div>
                </div>
                <div>
                  <label htmlFor={`sifra-${index}`}>Šifra:</label>
                  <input
                    type="password"
                    minLength={8}
                    maxLength={8}
                    id={`sifra-${index}`}
                    value={config.sifra}
                    onChange={(e) =>
                      handlePortInputChange(index, "sifra", e.target.value)
                    }
                  />
                </div>
                {portValidationErrors[index] && (
                  <p className={styles.portErrorMessage}>
                    {portValidationErrors[index]}
                  </p>
                )}
              </div>
            ))}

            <button type="submit">Kreiraj fajl <SendIcon></SendIcon></button>
          </form>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
