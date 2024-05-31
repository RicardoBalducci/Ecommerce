import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/customers.module.css";
function Customers() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>What Our Customers Say</h1>
        <h2 className={styles.subTitulo}>
          Hear from our satisfied customers about their experience with our
          products.
        </h2>

        <div className={styles.cuadro}>
          <div className={styles.icono}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={styles.cuadros}>
            <h2 className={styles.nombre}>Joe doe</h2>
            <p className={styles.texto}>
              "I'm amazed by the quality and performance of the products I've
              purchased from Techno Warehouse. Highly recommended!"
            </p>
          </div>
        </div>
        <div className={styles.cuadro}>
          <div className={styles.icono}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={styles.cuadros}>
            <h2 className={styles.nombre}>Sarah</h2>
            <p className={styles.texto}>
              "I've been a loyal customer of Techno Warehouse for years. Their
              customer service is top-notch and their products never
              disappoint."
            </p>
          </div>
        </div>
        <div className={styles.cuadro}>
          <div className={styles.icono}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={styles.cuadros}>
            <h2 className={styles.nombre}>MR Micha</h2>
            <p className={styles.texto}>
              "I'm so glad I found Techno Warehouse. Their selection of tech
              products is unbeatable, and the prices are incredibly reasonable."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
