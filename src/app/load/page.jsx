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
  const [searchXmlFile, setSearchXmlFile] = useState("");

  const handleXmlFieldChange = (index, newValue) => {
    setChildrenState((prev) =>
      prev.map(item, (i) => (i === index ? { ...item, value: newValue } : item))
    );
  };

  const handleLoadXml = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/load-xml-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchXmlFile }),
      });

      const contentType = res.headers.get("content-type") || "";

      if (!res.ok) {
        const data = await res.json();
        toast.error(`${data.message ?? "Failed to Load .xml"} `);
        return;
      }

      /* ---If server returns raw text --- */
      if (
        contentType.includes("text/xml") ||
        contentType.includes("application/xml")
      ) {
        const xmlText = await res.text();
        parseAndSetXml(xmlText);
        toast.success("XML loaded successfully");
        return;
      }

      /* --- If server returns a Blob/File --- */
      if (
        contentType.includes("octet-stream") ||
        contentType.includes("application/octet-stream")
      ) {
        const blob = await res.blob();
        const xmlText = await blob.text();
        parseAndSetXml(xmlText);
        toast.success("XML loaded successfully");
        return;
      }
      toast.error("Unexpected response type — expected XML.");
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`);
    }
  };

  const parseAndSetXml = (xmlString) => {
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
            value={searchXmlFile}
            onChange={(e) => setSearchXmlFile(e.target.value)}
            placeholder="npr: cfgaabbccddeeff"
          ></input>
        </div>
        <button type="submit" className={styles.loadButton}>
          Load
        </button>
      </form>
      <main className={styles.main}>
        {/* Display parsed XML as a form */}
        {childrenState.length > 0 && (
          <div className={styles.inputContainer}>
            <h2>Parsed XML Fields</h2>
            <form className={styles.form}>
              {childrenState.map((item, index) => (
                <div key={index} className={styles.formGroup}>
                  <label htmlFor={`field-${index}`} className={styles.label}>
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
                  ></input>
                </div>
              ))}
            </form>
          </div>
        )}
        {/* Display raw XML */}
        {rawXmlContent && (
          <div>
            <h2>Raw XML</h2>
            <pre className={styles.rawXml}>
              {new XMLSerializer().serializeToString(rawXmlContent)}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
}
