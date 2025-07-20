"use client"; // This component will run on the client-side
import { useState } from "react";
import styles from "./page.module.css";
import toast from "react-hot-toast";

//FRONTEND STRANICA SVIH KORISNIKA
export default function LoadPage() {
  //FOR RAW XML
  const [rawXmlContent, setRawXmlContent] = useState(null);
  //FOR PARSE XML // Parsed children: [{ name, value }]
  const [childrenState, setChildrenState] = useState([]);

  //FOR SEARCH FIELD
  const [searchXmlByMac, setSearchXmlByMac] = useState("");

  const [activeTab, setActiveTab] = useState("tab1");

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

    try {
      const res = await fetch("/api/load-xml", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchXmlByMac }),
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

        toast.success("XML loaded successfully", {
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
      const res = await fetch("/api/save-edited-xml", {
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

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Load .xml file</h1>
      <form className={styles.formSearch} onSubmit={handleLoadXml}>
        <div className={styles.formGroup}>
          <label htmlFor="search" className={styles.label}>
            Unesite ime .xml fajla:
          </label>
          <input
            id="search"
            type="text"
            className={styles.input}
            value={searchXmlByMac}
            onChange={(e) => setSearchXmlByMac(e.target.value)}
            placeholder="npr: cfgaabbccddeeff"
            maxLength={19}
          ></input>
        </div>
        <button type="submit" className={styles.loadButton}>
          Load
        </button>
      </form>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* Tab Navigation */}
          <div className={styles.tabNavigation}>
            {/* Tab 1 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "tab1" ? styles.activeTab : ""
              } ${styles.firstTab}`}
              onClick={() => handleTabClick("tab1")}
              aria-selected={activeTab === "tab1"}
              role="tab"
            >
              Basic Field
            </button>

            {/* Tab 2 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "tab2" ? styles.activeTab : ""
              }`}
              onClick={() => handleTabClick("tab2")}
              aria-selected={activeTab === "tab2"}
              role="tab"
            >
              Advanced Field
            </button>

            {/* Tab 3 Button */}
            <button
              className={`${styles.tabButton} ${
                activeTab === "tab3" ? styles.activeTab : ""
              } ${styles.lastTab}`}
              onClick={() => handleTabClick("tab3")}
              aria-selected={activeTab === "tab3"}
              role="tab"
            >
              Raw XML
            </button>
          </div>

          {/* Tab Content Windows */}
          <div className={styles.tabContentArea}>
            {/* Content for Tab 1 */}
            {activeTab === "tab1" && (
              <div
                className={`${styles.tabPanel} ${styles.tab1Panel}`}
                role="tabpanel"
                aria-labelledby="tab1-label"
              >
                {/* Display parsed XML as a form */}
                {childrenState.length > 0 && (
                  <div className={styles.inputContainer}>
                    <form
                      className={styles.formParsed}
                      onSubmit={handleSaveAndSendXml}
                    >
                      {childrenState.map((item, index) => {
                        if (index > 3) return;
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
                      <button type="submit" className={styles.loadButton}>
                        Save
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Content for Tab 2 */}
            {activeTab === "tab2" && (
              <div
                className={`${styles.tabPanel} ${styles.tab2Panel}`}
                role="tabpanel"
                aria-labelledby="tab2-label"
              >
                {/* Display parsed XML as a form */}
                {childrenState.length > 0 && (
                  <div className={styles.inputContainer}>
                    <form
                      className={styles.formParsed}
                      onSubmit={handleSaveAndSendXml}
                    >
                      {childrenState.map((item, index) => {
                        if (index < 4) return;
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
                      <button type="submit" className={styles.loadButton}>
                        Save
                      </button>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* Content for Tab 3 */}
            {activeTab === "tab3" && (
              <div
                className={`${styles.tabPanel} ${styles.tab3Panel}`}
                role="tabpanel"
                aria-labelledby="tab3-label"
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
