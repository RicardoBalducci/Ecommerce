import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faMobileScreenButton,
  faHeadphones,
  faDesktop,
  faCamera,
  faTabletScreenButton,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./css/products.module.css";
import { LenguajeInterface } from "../../../../interface/InterfaceLenguaje";

function Products({ language }: LenguajeInterface) {
  return (
    <>
      <div className={styles.Text}>
        <h1>
          {language === "en"
            ? "Browse Our Product Categories"
            : "Explora Nuestras Categorías de Productos"}
        </h1>
        <h3>
          {language === "en"
            ? "Find the perfect tech products for your needs."
            : "Encuentra los productos tecnológicos perfectos para tus necesidades."}
        </h3>
      </div>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.wrap}>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>{language === "en" ? "Laptops" : "Laptops"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <h3>{language === "en" ? "Phone" : "Teléfono"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <h3>{language === "en" ? "Headphones" : "Audífonos"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3>{language === "en" ? "CPU" : "CPU"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3>{language === "en" ? "Camera" : "Cámara"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faTabletScreenButton} />
              </div>
              <h3>{language === "en" ? "Tablet" : "Tableta"}</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <h3>{language === "en" ? "Games" : "Juegos"}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

//
