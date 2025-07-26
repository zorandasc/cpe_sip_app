"use client"; // This component will run on the client-side

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import SaveIcon from "@/components/icons/SaveIcon";

import toast from "react-hot-toast";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/ext-searchbox";

//FRONTEND STRANICA SVIH KORISNIKA
export default function Load() {
  const [allFiles, setAllFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);

  const [searchFile, setSearchFile] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  const [rawXmlContent, setRawXmlContent] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleSearchFile = (value) => {
    setSearchFile(value);
    const filtered = allFiles.filter((file) =>
      file.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFiles(filtered);
  };

  //FETCH XML FROM NETWORK
  const handleLoadSingleXml = async (file) => {
    //STRIP .xml EXTENSION AT THE AND ALSO
    //STRIP cfg AT THE BEGINIBIG
    const targetBase = file
      .toLowerCase()
      .replace(/\.xml$/i, "")
      .replace(/^cfg/i, "");

    try {
      setLoading(true);

      const res = await fetch("/api/xml-load", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchXmlByMac: targetBase }),
      });

      //RESPONSE MOZE BITI TEXT ILI BLOB
      const contentType = res.headers.get("content-type") || "";

      if (!res.ok) {
        const data = await res.json();
        console.log(`${data.message ?? "Failed to Load .xml"} `);
        toast.error(`${data.message ?? "Failed to Load .xml"} `, {
          position: "top-left",
        });
        return;
      }

      /* ---If server returns raw text --- */
      let xmlText = "";
      if (
        contentType.includes("text/xml") ||
        contentType.includes("application/xml")
      ) {
        xmlText = await res.text();
      }
      if (
        /* --- If server returns a Blob/File --- */
        contentType.includes("octet-stream") ||
        contentType.includes("application/octet-stream")
      ) {
        const blob = await res.blob();
        xmlText = await blob.text();
      }

      if (!xmlText) {
        toast.error("Unexpected response type — expected XML.");
        return;
      }

      //STORE RAW XML TO STATE
      setRawXmlContent(xmlText);

      toast.success(`${file}, loaded successfully`, {
        position: "top-right",
        duration: 3000,
      });
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = async (file) => {
    setSelectedFile(file);
    handleLoadSingleXml(file);
  };

  const handleSaveAndSendXml = () => {};

  const closeModal = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    // Function to fetch users from the API
    const fetchFiles = async () => {
      try {
        setLoading(true); // Set loading to true before fetching

        const res = await fetch("/api/xml-load-all"); // Make the GET request to your API route

        if (!res.ok) {
          // If the response is not OK (e.g., 400, 500 status)
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to fetch filess");
        }

        if (res.status === 401) {
          //NO TOKEN OR EXPIRED
          window.location.href = "/login";
        } else {
          const data = await res.json();
          setAllFiles(data);
          setFilteredFiles(data);
        }
      } catch (err) {
        console.error("Error fetching allFiles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}>Loading resurces...</p>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.searchContainer}>
        <input
          id="search"
          type="text"
          className={styles.input}
          value={searchFile}
          onChange={(e) => handleSearchFile(e.target.value)}
          placeholder="Search..."
          maxLength={25}
        ></input>
      </div>
      <div className={styles.contentWrapper}>
        {filteredFiles.map((file, i) => (
          <div
            key={i}
            className={styles.file}
            onClick={() => handleOpenModal(file)}
          >
            {file}
          </div>
        ))}
      </div>
      {selectedFile && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Editing File</h2>
              <p className={styles.filename}>{selectedFile}</p>
            </div>

            <div className={styles.editorContainer}>
              <AceEditor
                mode="xml"
                theme="merbivore_soft"
                value={rawXmlContent}
                onChange={(val) => setRawXmlContent(val)}
                name="xml_editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="600px"
                fontSize={14}
                lineHeight={22}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                onLoad={(editor) => {
                  editor.commands.addCommand({
                    name: "showSearchBox",
                    bindKey: { win: "Ctrl-F", mac: "Command-F" },
                    exec: function (editor) {
                      editor.execCommand("find");
                    },
                  });
                }}
              />
            </div>

            <div className={styles.modalFooter}>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#888",
                }}
              >
                Hint: Označite tekst ili pritisnite <kbd>Ctrl</kbd> +{" "}
                <kbd>F</kbd> (ili <kbd>⌘</kbd> + <kbd>F</kbd> na Mac) da biste
                brzo pronašli tekst u XML.
              </p>
              <button
                type="button"
                className={styles.saveButton}
                onClick={handleSaveAndSendXml}
              >
                Save <SaveIcon></SaveIcon>
              </button>
              <button
                type="button"
                className={styles.closeButton}
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
