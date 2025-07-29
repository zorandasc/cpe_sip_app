"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import SendIcon from "@/components/icons/SendIcon";
import { phones } from "@/utils/phoneOptions";
import styles from "./page.module.css";

export default function Home() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  //INICIJALNI STATE
  const [selectedPhone, setSelectedPhone] = useState(null);

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

  const handlePhoneSelect = (item) => {
    console.log(item);
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

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
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

    // Validation logic:
    //if: AKO BROJ NE POCINJE SA 387-> GRESKA, OSIM AKO BROJ NIJE PRAZAN
    //else: AKO JE JEDNO POLJE PRAZNO A DRUGO NIJE -> GRESKA
    if (
      !isBrojTelefonaEmpty &&
      !updatedPortConfigs[index].brojTelefona.trim().startsWith("387")
    ) {
      newErrors[index] = "Broj mora početi sa 387.";
    } else if (
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
      setLoading(true);
      const response = await fetch("/api/xml-new", {
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
        //console.log("Server response:", data);

        //reset form after successful save
        handlePhoneSelect(selectedPhone);
      } else {
        const errorData = await response.json();

        toast.error(`Greška pri čuvanju konfiguracije: ${errorData.message}`);
        console.error("Server error:", errorData);
      }
    } catch (error) {
      console.error("Network or client-side error:", error);

      toast.error(`Došlo je do greške pri komunikaciji sa serverom`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontSize: "1.5rem",
          color: "#63b3ed",
        }}
      >
        Sending data...
      </div>
    );
  }

  return (
    <main className={styles.main}>
      {/* Wrapper for 2-column layout */}
      <div className={styles.twoColumn}>
        {/* LEFT: Text List */}
        <div className={styles.textList}>
          <ul>
            {phones.map((item) => (
              <li
                key={item.name}
                onClick={() => handlePhoneSelect(item)}
                className={`${styles.textItem} ${
                  selectedPhone?.name === item.name ? styles.active : ""
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Image Grid */}
        <ul className={styles.grid}>
          {phones.map((item) => (
            <li
              key={item.name}
              onClick={() => handlePhoneSelect(item)}
              className={`${styles.item} ${
                selectedPhone?.name === item.name ? styles.selectedItem : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className={styles.image}
                  priority
                />
                <div className={styles.overlay}>{item.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Display form only if a phone is selected */}
      {selectedPhone && (
        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
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
              maxLength={17}
            />
            {macErrorMessage && (
              <p className={styles.errorMessage}>{macErrorMessage}</p>
            )}
          </div>
          {/* Dynamically render input fields based on selectedPhone.port */}
          <div className={styles.portConfigContainer}>
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
                    <span className={styles.phonePrefix}>+</span>
                    <input
                      type="tel"
                      pattern="[0-9]*"
                      id={`brojTelefona-${index}`}
                      value={config.brojTelefona}
                      placeholder="Npr. 38751123456"
                      minLength={11}
                      maxLength={11}
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
                    type="text"
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
          </div>
          <button
            type="submit"
            className={styles.submit}
            disabled={
              Object.keys(portValidationErrors).length > 0 || macErrorMessage
                ? true
                : undefined
            }
          >
            Create <SendIcon></SendIcon>
          </button>
        </form>
      )}
    </main>
  );
}
