"use client"; // This component will run on the client-side
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import toast from "react-hot-toast";
import SaveIcon from "@/components/icons/SaveIcon";
import DownLoadIcon from "@/components/icons/DownLoadIcon";

//FRONTEND STRANICA SVIH KORISNIKA
export default function LoadPage() {
  //FOR RAW XML
  const [rawXmlContent, setRawXmlContent] = useState(null);
  const [basicXmlContent, setBasicXmlContent] = useState([]);
  const [advancedXmlContent, setAdvancedXmlContent] = useState([]);

  //FOR PARSE XML // Parsed children: [{ name, value }]
  const [childrenState, setChildrenState] = useState([]);

  //FOR SEARCH FIELD
  const [searchXmlByMac, setSearchXmlByMac] = useState("");
  const [macErrorMessage, setMacErrorMessage] = useState(null);

  const [activeTab, setActiveTab] = useState("basic");

  const handleMacChange = (e) => {
    let value = e.target.value;

    // 2. Convert to uppercase for consistency in display
    value = value.toUpperCase();

    const originalValue = value.trim();

    // 1. Remove any characters that are not hex digits, colons, or hyphens
    value = value.replace(/[^0-9a-fA-F:-]/g, "");

    setSearchXmlByMac(value);

    let currentErrorMessage = null;

    if (originalValue !== value) {
      currentErrorMessage =
        "Dozvoljeni su samo heksadecimalni karakteri (0-9, A-F), dvotačke (:) ili crtice (-).";
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
  //REMOVE : AND -
  const getCleanMac = (rawMac) => {
    return rawMac.replace(/[^0-9a-fA-F]/g, "").toLowerCase();
  };

  // Function to handle tab clicks
  // It updates the activeTab state to the clicked tab's ID
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  //RECORD CHANGES OF EVERY FIELD
  const handleXmlFieldChange = (index, newValue) => {
    setChildrenState((prev) =>
      prev.map((item, i) => (i === index ? { ...item, value: newValue } : item))
    );
  };

  //FETCH XML FROM NETWORK
  const handleLoadXml = async (e) => {
    e.preventDefault();

    const cleandeXmlToSend = getCleanMac(searchXmlByMac);

    try {
      const res = await fetch("/api/xml-load", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchXmlByMac: cleandeXmlToSend }),
      });

      //RESPONSE MOZE BITI TEXT ILI BLOB
      const contentType = res.headers.get("content-type") || "";

      if (!res.ok) {
        const data = await res.json();
        toast.error(`${data.message ?? "Failed to Load .xml"} `, {
          position: "top-left",
        });
        return;
      }

      /* ---If server returns raw text --- */
      if (
        contentType.includes("text/xml") ||
        contentType.includes("application/xml")
      ) {
        const xmlText = await res.text();

        parseReacivedXml(xmlText);

        toast.success(`XML cfg${cleandeXmlToSend}.xml loaded successfully`, {
          position: "top-left",
        });

        return;
      }

      /* --- If server returns a Blob/File --- */
      if (
        contentType.includes("octet-stream") ||
        contentType.includes("application/octet-stream")
      ) {
        const blob = await res.blob();
        const xmlText = await blob.text();

        parseReacivedXml(xmlText);

        toast.success("XML loaded successfully");

        return;
      }
      toast.error("Unexpected response type — expected XML.");
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`);
    }
  };

  //HELPER FUCTION
  const parseReacivedXml = (xmlString) => {
    const parser = new DOMParser();

    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    setRawXmlContent(xmlDoc);

    const configElement = xmlDoc.querySelector("config");
    if (!configElement) {
      toast.error("No <config> tag found in XML.");
      return;
    }

    //COVERT HTMLCollection TO ARRAY, THEN MAP OVER IT
    const newChildren = Array.from(configElement.children).map((child) => ({
      name: child.tagName,
      value: child.textContent,
    }));

    setChildrenState(newChildren);
  };

  //RETURN EDITED XML TO NETWORK
  const handleSaveAndSendXml = async (e) => {
    e.preventDefault();

    const updatedXml = editReacivedXml();

    const serializer = new XMLSerializer();
    const serializedXml = serializer.serializeToString(updatedXml);

    try {
      const res = await fetch("/api/xml-edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/xml",
        },
        body: serializedXml,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(`${data.message}`);
        return;
      }

      toast.success(`${data.message}`, {
        position: "top-left",
      });
      setRawXmlContent(null);
      setChildrenState([]);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error(`Something went wrong", ${error}`);
    }
  };

  //HELPER FUNCTION
  const editReacivedXml = () => {
    const xmlClone = rawXmlContent.cloneNode(true);

    childrenState.forEach((child) => {
      //ZA SVAKI ELEMENT IZ childrenState
      const element = xmlClone.querySelector(child.name);
      //IZMJENI xmlClone VRIJEDNOST
      if (element) element.textContent = child.value;
    });

    return xmlClone;
  };

  useEffect(() => {
    //ZA GRANDSTREAM TELEFON JE P401 GRANICA
    //ZA RGW JE P2 TAG GRANICA
    const p401Index = childrenState.findIndex(
      (item) => item.name === "P401" || item.name === "P2"
    );

    //FOR DIPLAYING BASIC PARAMETARS
    const before401 =
      p401Index !== -1 ? childrenState.slice(0, p401Index) : childrenState;
    setBasicXmlContent(before401);

    //FOR DIPLAYING ADVANCED PARAMAETARS
    const afterP401 = p401Index !== -1 ? childrenState.slice(p401Index) : [];
    setAdvancedXmlContent(afterP401);
  }, [childrenState]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Load .xml file</h1>
      <form className={styles.formSearch} onSubmit={handleLoadXml}>
        <div className={styles.formGroup}>
          <label htmlFor="search" className={styles.label}>
            MAC adresa:
          </label>
          <input
            id="search"
            type="text"
            className={styles.input}
            value={searchXmlByMac}
            onChange={handleMacChange}
            required
            placeholder="Npr. AA:BB:CC:DD:EE:FF"
            maxLength={25}
          ></input>
          {macErrorMessage && (
            <p className={styles.errorMessage}>{macErrorMessage}</p>
          )}
        </div>

        <button
          type="submit"
          className={styles.loadButton}
          disabled={macErrorMessage ? true : undefined}
        >
          <DownLoadIcon></DownLoadIcon>
        </button>
      </form>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Tab Navigation */}
          <div className={styles.tabNavigation}>
            {/* Tab 1 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "basic" ? styles.activeTab : ""
              } ${styles.firstTab}`}
              onClick={() => handleTabClick("basic")}
              aria-selected={activeTab === "basic"}
              role="tab"
            >
              Basic Field
            </button>

            {/* Tab 2 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "advanced" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabClick("advanced")}
              aria-selected={activeTab === "advanced"}
              role="tab"
            >
              Advanced Field
            </button>

            {/* Tab 3 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "raw" ? styles.activeTab : ""
              } ${styles.lastTab}`}
              onClick={() => handleTabClick("raw")}
              aria-selected={activeTab === "raw"}
              role="tab"
            >
              Raw XML
            </button>
          </div>

          {/* Tab Content Windows */}
          <div className={styles.tabContentArea}>
            {/* Content for Tab 1 */}
            {activeTab === "basic" && (
              <div
                className={`${styles.tabPanel} ${styles.tab1Panel}`}
                role="tabpanel"
                aria-labelledby="basic-label"
              >
                {/* Display parsed XML as a form */}
                {childrenState.length > 0 && (
                  <form
                    className={styles.formParsed}
                    onSubmit={handleSaveAndSendXml}
                  >
                    {basicXmlContent.map((item, index) => {
                      return (
                        <div key={index} className={styles.formGroup}>
                          {index % 4 === 0 && (
                            <label
                              htmlFor={`field-${index}`}
                              className={styles.label}
                            >
                              Phone {index / 4}
                            </label>
                          )}

                          <input
                            id={`field-${index}`}
                            type="text"
                            value={item.value}
                            onChange={(e) =>
                              handleXmlFieldChange(index, e.target.value)
                            }
                            className={styles.input}
                          ></input>
                        </div>
                      );
                    })}
                    <button type="submit" className={styles.saveButton}>
                      <SaveIcon></SaveIcon>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Content for Tab 2 */}
            {activeTab === "advanced" && (
              <div
                className={`${styles.tabPanel} ${styles.tab2Panel}`}
                role="tabpanel"
                aria-labelledby="advanced-label"
              >
                {/* Display parsed XML as a form */}
                {childrenState.length > 0 && (
                  <form
                    className={styles.formParsed}
                    onSubmit={handleSaveAndSendXml}
                  >
                    {advancedXmlContent.map((item, index) => {
                      return (
                        <div key={index} className={styles.formGroup}>
                          <label
                            htmlFor={`field-${index}`}
                            className={styles.label}
                          >
                            {item.name}
                          </label>
                          <input
                            id={`field-${index}`}
                            type="text"
                            value={item.value}
                            onChange={(e) =>
                              handleXmlFieldChange(index, e.target.value)
                            }
                            className={styles.input}
                            style={
                              item.name == "P270"
                                ? { marginBottom: "2rem" }
                                : null
                            }
                          ></input>
                        </div>
                      );
                    })}
                    <button type="submit" className={styles.saveButton}>
                      <SaveIcon></SaveIcon>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* Content for Tab 3 */}
            {activeTab === "raw" && (
              <div
                className={`${styles.tabPanel} ${styles.tab3Panel}`}
                role="tabpanel"
                aria-labelledby="raw-label"
              >
                {/* Display raw XML */}
                {rawXmlContent && (
                  <div className={styles.rawContainer}>
                    <pre className={styles.rawXml}>
                      {new XMLSerializer().serializeToString(rawXmlContent)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
