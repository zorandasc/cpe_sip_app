"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { toast } from "react-hot-toast";
import SendIcon from "@/components/icons/SendIcon";
import { phones, phoneTypes } from "@/utils/phoneOptions";
import styles from "./page.module.css";

export default function Home() {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);
  //INICIJALNI STATE
  const [selectedPhone, setSelectedPhone] = useState(null);

  const [selectedPhoneType, setSelectedPhoneType] = useState(phoneTypes[0]);

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

  const handlePhoneTypeSelect = (phoneType) => {
    setSelectedPhoneType(phoneType);
    //WHWN CHANGE TYPE DESELECT PREVIUS SELECTED PHONE
    setSelectedPhone(null);
  };

  //item je phoneOptions item
  const handlePhoneSelect = (item) => {
    //PRIKAZI FORMU IZABRANOG TELEFONA
    setSelectedPhone(item);

    //AKO PROMJENIS TELEFON IZBRISI GRESKE ZA MAC
    //AKO POSTOJE OD PRIJSANJEG TELEFONA
    setMacErrorMessage(null);

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

      toast("Nevažeći karakteri uklonjeni.", {
        style: { background: "#d5ae66" },
      });
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

  //TO CHECK VALIDITY OF PHONE NUMBER
  function isValidPhoneNumber(input) {
    // Remove all non-digit characters (spaces, dashes, etc.)
    const cleaned = input.replace(/\D/g, "");

    if (!/^\d{8,11}$/.test(cleaned)) {
      return false; // Not 8–11 digits
    }

    if (cleaned.length === 11) {
      return cleaned.startsWith("387");
    }

    if (cleaned.length === 9) {
      return cleaned.startsWith("0");
    }

    return cleaned.length === 8; // No prefix rule
  }

  //TO CLEAN PHONE NUMBER TO 5123456 IN SUBMIT
  //? CLEAN THE NUMBER TO BE IN THIS FORMAT 51234417
  function cleanPhoneNumber(input) {
    const digits = input.replace(/\D/g, "");

    // If it's 11 digits and starts with 387 → strip "387"
    if (digits.length >= 11 && digits.startsWith("387")) {
      return digits.slice(3);
    }

    // If it's 9 digits and starts with 0 → strip "0"
    if (digits.length === 9 && digits.startsWith("0")) {
      return digits.slice(1);
    }

    // If it's already 8 digits
    if (digits.length === 8) {
      return digits;
    }

    // Fallback: return as-is (or empty)
    return "";
  }

  const handlePortInputChange = (index, fieldName, value) => {
    //UPDATE STATE
    const updatedPortConfigs = portConfigs.map((config, i) => {
      if (index === i) {
        return { ...config, [fieldName]: value };
      }
      return config;
    });

    let phone = updatedPortConfigs[index].brojTelefona;
    let pass = updatedPortConfigs[index].sifra;

    const isBrojTelefonaEmpty = phone.trim() === "";
    const isSifraEmpty = pass.trim() === "";

    let newErrors = { ...portValidationErrors }; // Copy current errors

    // Validation logic:
    //if: NUMBER NOT VALIDATED CORRECTLY->ERROR
    //else: IF ONE OF THE FIELD EMPTY -> ERROR
    if (!isBrojTelefonaEmpty && !isValidPhoneNumber(phone)) {
      newErrors[index] =
        'Ne validan broj telefona. Mora biti 8–11 brojeva. "387" za 11 brojeva, "0" za 9 brojeva.';
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

    //CLEANING PHONE NUMBERS FOR SENDING
    //EVERY PHONE NUMBER WILL BE IN 8-DIGIT FORMAT: 51234417
    const cleanedConfigs = portConfigs.map((config) => {
      const phone = config.brojTelefona.trim();

      const cleanedPhone = isValidPhoneNumber(phone)
        ? cleanPhoneNumber(phone)
        : "";

      return { ...config, brojTelefona: cleanedPhone };
    });

    //PRIPREMA PODATAKA ZA SLANJE
    const formData = {
      selectedPhone,
      mac: cleanedMac,
      portConfigs: cleanedConfigs,
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
    return <div className={styles.loading}>Sending data...</div>;
  }

  return (
    <main className={styles.main}>
      {/* Wrapper for 2-column layout */}
      <div className={styles.twoColumn}>
        {/* LEFT: Text List */}
        <div className={styles.phoneTypeList}>
          <ul>
            {phoneTypes.map((item) => (
              <li
                key={item}
                onClick={() => handlePhoneTypeSelect(item)}
                className={`${styles.textItem} ${
                  selectedPhoneType === item ? styles.active : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Image Grid */}
        <ul key={selectedPhoneType || "all"} className={styles.grid}>
          {phones
            .filter(
              (item) =>
                selectedPhoneType === null || item.type === selectedPhoneType
            )
            .map((item, index) => (
              <li
                key={item.name}
                onClick={() => handlePhoneSelect(item)}
                className={`${styles.item} ${
                  selectedPhone?.name === item.name ? styles.selectedItem : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
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
      {
        <div  className={styles.formContainer} style={{ display: selectedPhone ? "flex" : "none" }}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <h3>Konfiguracija za: {selectedPhone?.name}</h3>
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
                  {selectedPhone?.port > 1 && (
                    <h4 className={styles.portHeading}>Port {index + 1}</h4>
                  )}
                  <div>
                    <label htmlFor={`brojTelefona-${index}`}>
                      Broj Telefona:
                    </label>
                    <div className={styles.phoneInputContainer}>
                      <input
                        type="tel"
                        //pattern="[0-9]*"
                        id={`brojTelefona-${index}`}
                        value={config.brojTelefona}
                        className={styles.phoneInput}
                        placeholder="Npr. +38751123456, 051223456, 51123456"
                        //minLength={8}
                        //maxLength={11}
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
                      maxLength={12}
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
        </div>
      }
    </main>
  );
}
