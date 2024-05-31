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

function Products() {
  return (
    <>
      <div className={styles.Text}>
        <h1>Browse Our Product Categories</h1>
        <h3>Find the perfect tech products for your needs.</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.wrap}>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>Laptops</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <h3>Telefono</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faHeadphones} />
              </div>
              <h3>Audifonos</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faDesktop} />
              </div>
              <h3>CPU</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3>Camara</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faTabletScreenButton} />
              </div>
              <h3>Tablet</h3>
            </div>
            <div className={styles.cuadro}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <h3>Juegos</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

//
