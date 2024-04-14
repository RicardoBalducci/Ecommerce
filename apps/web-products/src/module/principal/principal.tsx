import { useState } from "react";
import styles from "./css/principal.module.css";
import Zapato from "../../assets/Zapato.jpg";
import BotonPrincipal from "./components/button";

function Principal() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className={styles["Container"]}>
      <img
        src={Zapato}
        alt="React Logo"
        className={`${styles["Image"]} ${isZoomed ? styles["Zoomed"] : ""}`}
        onClick={handleImageClick}
      />
      <div className={styles["Texto"]}>
        <h1 className={styles["h1"]}>Zapatos de shoebox</h1>
        <p>Ventas al mayor preció</p>
        <p>29.50$</p>
        <BotonPrincipal />
      </div>
    </div>
  );
}

export default Principal;
