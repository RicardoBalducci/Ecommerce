import React, { useState } from "react";
import styles from "./css/home.module.css";
import LanguageButton from "../../components/Button/LanguageButton";
import Portada from "./components/portada/portada";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

function Home() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
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
      <header className={styles.Cabecera}>
        <h1 className={styles.Cabecera_h1}>Techno WareHouse</h1>

        <button onClick={toggleMenu} className={styles.Cabecera_button}>
          <svg
            className={styles.Cabecera_svg}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <nav className={`${styles.CabeceraNav} ${menu ? styles.isActive : ""}`}>
          <ul className={styles.Cabecera_ul}>
            <li className={styles.Cabecera_li}>
              <Link to="/#Home" className={styles.Cabecera_a}>
                {language === "en" ? "Home" : "Inicio"}
              </Link>
            </li>
            <li className={styles.Cabecera_li}>
              <LanguageButton
                language={language}
                handleLanguageChange={handleLanguageChange}
              />
            </li>
          </ul>
        </nav>
      </header>

      <div id="Home">
        <Portada language={language} />
      </div>
      <Footer language={language} />
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
