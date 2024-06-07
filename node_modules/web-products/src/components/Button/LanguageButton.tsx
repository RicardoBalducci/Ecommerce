// LanguageButton.js
import React from "react";
import styles from "./css/LanguageButton.module.css";

function LanguageButton({ language, handleLanguageChange }) {
  return (
    <button onClick={handleLanguageChange} className={styles.languageButton}>
      {language === "en" ? "Change Language" : "Cambiar Idioma"}
    </button>
  );
}

export default LanguageButton;
//
