import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Home() {
  return (
    <>
      <nav className="nav">
        <a className="nav-link active" aria-current="page" href="#">
          Active
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link disabled" href="#" aria-disabled="true">
          Disabled
        </a>
      </nav>
    </>
  );
}

export default Home;
/*

import React, { useState } from "react";
import Registrarse from "./components/registro/registrarse";
import LanguageButton from "../../components/Button/LanguageButton";
import Reloj from "./components/reloj/reloj";
import Portada from "./components/portada/portada";
import Customers from "./components/customers/customers";
import Products from "./components/products/products";
import Aspect from "./components/aspect/aspect";
import styles from "./css/home.module.css";
import Footer from "../../components/footer/footer";
function Home() {
  const [language, setLanguage] = useState("en");
  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };
  return (
    <>
      <LanguageButton
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
      <Portada language={language} />
      <div className={styles.espacio} />
      <Products language={language} />
      <div className={styles.espacio} />
      <Aspect language={language} />
      <div className={styles.espacio} />
      <Customers language={language} />
      <div className={styles.espacio} />
      <Reloj language={language} />
      <div className={styles.espacio} />
      <Registrarse language={language} />

      <Footer language={language} />
    </>
  );
}

export default Home;

*/
