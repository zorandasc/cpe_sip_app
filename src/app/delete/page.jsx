"use client"; // This component will run on the client-side

import { useState, useEffect } from "react";
import styles from "./page.module.css";

//["xmlconfigs/Grandstream", "xmlconfigs/", "xmlconfigs/Cisco502G", "xmlconfigs/Cisco512G"]
import { phoneFolders } from "@/utils/phoneConfig";
import SaveIcon from "@/components/icons/SaveIcon";
import { toast } from "react-hot-toast";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-merbivore_soft";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-searchbox";

//FRONTEND STRANICA SVIH VOIP KONFIG FAJLOVA
export default function DeletePage() {
  const [allFiles, setAllFiles] = useState([]);

  const [selectedFile, setSelectedFile] = useState(null);

  //PRVI SELECTOVANI FOLDER JE "xmlconfigs/Grandstream"
  const [selectedFolder, setSelectedFolder] = useState(phoneFolders[0]);

  const [searchFile, setSearchFile] = useState("");

  const [rawXmlContent, setRawXmlContent] = useState(null);

  const [loading, setLoading] = useState(false);

  //FOR ANIMATION OF CLOSING MODAL
  const [isClosing, setIsClosing] = useState(false);

  const [totalCount, setTotalCount] = useState(0);

  const [theme, setTheme] = useState("kuroir");

  //LOCAL SEARCH
  const handleSearchFile = (value) => {
    setSearchFile(value);
  };

  //FETCH XML FROM NETWORK
  const handleLoadSingleXml = async (fileName) => {
    try {
      const res = await fetch("/api/xml-load-one", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fileName, folderPath: selectedFolder.path }),
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
        setRawXmlContent(xmlText);
        return;
      }

      //STORE RAW XML TO STATE
      setRawXmlContent(xmlText);

      //toast.success(`${fileName}, loaded.`, {});
    } catch (err) {
      console.log("Something went wrong", err);
      toast.error(`Something went wrong", ${err}`);
    }
  };

  //OPEN MODAL AND RETRIEVE XML
  const handleOpenModal = async (fileName) => {
    setSelectedFile(fileName);
    handleLoadSingleXml(fileName);
  };

  //DELETE XML
  const handleDeleteXml = async (e) => {
    e.preventDefault();
  };

  //CLOSE XML
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedFile(null);
      setIsClosing(false);
    }, 300); // match duration of animation
  };

  const loadFilesFromFolder = async (folder) => {
    //SAVE SELECTED SUBFOLDER THIS WE ARE USING FOR SAVING XML TO NETWORK
    setSelectedFolder(folder);
  };

  const handleToggleTheme = () => {
    setTheme((prev) =>
      prev === "merbivore_soft" ? "kuroir" : "merbivore_soft"
    );
  };

  useEffect(() => {
    if (!searchFile) {
      setAllFiles([]);
      return;
    }
    const params = new URLSearchParams({
      folderPath: selectedFolder.path,
      search: searchFile,
    });
    // Function to fetch xml and folders
    const fetchFiles = async () => {
      try {
        setLoading(true); // Set loading to true before fetching

        const res = await fetch(`/api/xml-load-all?${params}`);

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
          setAllFiles(data.files);

          setTotalCount(data.totalCount);
        }
      } catch (err) {
        console.error("Error fetching allFiles:", err);
        toast.error(`${err}`, { position: "top-left" });
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [searchFile, selectedFolder]);

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
        <ul className={styles.folderList}>
          {phoneFolders.map((folder, i) => {
            return (
              <li
                key={i}
                onClick={() => loadFilesFromFolder(folder)}
                className={`${styles.folderItem} ${
                  selectedFolder.folderName === folder.folderName
                    ? styles.activeFolder
                    : ""
                }`}
              >
                {folder.folderName}
              </li>
            );
          })}
        </ul>
        <div className={styles.itemsContainer}>
          <div className={styles.total}>{totalCount}</div>

          {!loading ? (
            Array.isArray(allFiles) &&
            allFiles.map((fileObj, i) => (
              <div
                key={i}
                className={styles.file}
                onClick={() => handleOpenModal(fileObj.name)}
              >
                <div>{fileObj.name}</div>
                <small className={styles.time}>
                  {new Date(fileObj.time).toLocaleString()}
                </small>
              </div>
            ))
          ) : (
            <div className={styles.loadingContainer}>
              <p className={styles.loadingText}>Loading resurces...</p>
            </div>
          )}
        </div>
      </div>
      {selectedFile && (
        <div className={`${styles.modalOverlay}`} onClick={closeModal}>
          <div
            className={`${styles.modal} ${
              isClosing ? styles.zoomOut : styles.zoomIn
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div>
                <h2 className={styles.modalTitle}>Delete File</h2>
                <p className={styles.filename}>{selectedFile}</p>
              </div>
              <button
                onClick={handleToggleTheme}
                className={styles.themeButton}
              >
                {theme === "merbivore_soft" ? "☀️" : "🌙"}
              </button>
            </div>

            <div className={styles.editorContainer}>
              <AceEditor
                mode="xml"
                theme={theme}
                value={rawXmlContent}
                onChange={(val) => setRawXmlContent(val)}
                name="xml_editor"
                editorProps={{ $blockScrolling: true }}
                width="100%"
                height="550px"
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
                onClick={handleDeleteXml}
              >
                Delete <SaveIcon></SaveIcon>
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
