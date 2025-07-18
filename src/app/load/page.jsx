"use client"; // This component will run on the client-side
import { useState } from "react";
import styles from "./page.module.css";

//FRONTEND STRANICA SVIH KORISNIKA
export default function LoadPage() {
  const [xmlContent, setXmlContent] = useState(null);

  const handleFileChange = (e) => {
    console.log("e", e);
    const file = e.target.files[0];

    if (file && file.type === "text/xml") {
      const reader = new FileReader();

      reader.onload = () => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(reader.result, "text/xml");
        setXmlContent(xmlDoc);
        const pass = xmlDoc.getElementsByTagName("P34")[0].textContent;
        console.log("pass:", pass);
        const allChildern = xmlDoc.querySelectorAll("config")[0].children;
        console.log("allChildern", allChildern);
        //make object of name and values of every childe
        //display as input field
        //store in state nay changes
      };

      reader.readAsText(file);
    } else {
      alert("Please upload a valid XML file");
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Load .xml file</h1>
      <main className={styles.main}>
        <input type="file" accept=".xml" onChange={handleFileChange}></input>
        {xmlContent && (
          <pre>{new XMLSerializer().serializeToString(xmlContent)}</pre>
        )}
      </main>
    </div>
  );
}
