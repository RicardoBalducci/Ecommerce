import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/customers.module.css";
import { LenguajeInterface } from "../../../../interface/InterfaceLenguaje";

function Customers({ language }: LenguajeInterface) {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          {language === "en"
            ? "What Our Customers Say"
            : "Lo que dicen nuestros clientes"}
        </h1>
        <h2 className={styles.subTitulo}>
          {language === "en"
            ? "Hear from our satisfied customers about their experience with our products."
            : "Escucha a nuestros clientes satisfechos sobre su experiencia con nuestros productos."}
        </h2>

        <div className={styles.cuadro}>
          <div className={styles.icono}>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className={styles.cuadros}>
            <h2 className={styles.nombre}>Joe doe</h2>
            <p className={styles.texto}>
              {language === "en"
                ? "I'm amazed by the quality and performance of the products I've purchased from Techno Warehouse. Highly recommended!"
                : "Estoy asombrado por la calidad y el rendimiento de los productos que he comprado en Techno Warehouse. ¡Muy recomendado!"}
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
              {language === "en"
                ? "I've been a loyal customer of Techno Warehouse for years. Their customer service is top-notch and their products never disappoint."
                : "He sido un cliente leal de Techno Warehouse durante años. Su servicio al cliente es de primera categoría y sus productos nunca decepcionan."}
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
              {language === "en"
                ? "I'm so glad I found Techno Warehouse. Their selection of tech products is unbeatable, and the prices are incredibly reasonable."
                : "Estoy muy contento de haber encontrado Techno Warehouse. Su selección de productos tecnológicos es inigualable y los precios son increíblemente razonables."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
