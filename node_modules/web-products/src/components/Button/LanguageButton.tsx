// LanguageButton.js
import React from "react";
import styles from "./css/LanguageButton.module.css";

function LanguageButton({ language, handleLanguageChange }) {
  return (
    <a
      href="#"
      onClick={handleLanguageChange}
      className={styles.languageButton}
    >
      {language === "en" ? "Change to Spanish" : "Cambiar a ingles"}
    </a>
  );
}

export default LanguageButton;
//
/*

<button  className={styles.languageButton}>
      
    </button>
*/
