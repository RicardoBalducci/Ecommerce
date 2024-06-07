import React from "react";
import styles from "./css/portada.module.css";
import { LenguajeInterface } from "../../../../interface/InterfaceLenguaje";

function Portada({ language }: LenguajeInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>
            {language === "en" ? "Discover the latest" : "Descubre lo último"}
          </h1>
          <h1>
            {language === "en" ? "Tech Trends" : "Tendencias Tecnológicas"}
          </h1>
          <h3>
            {language === "en"
              ? "Explore our wide range of cutting-edge technology products and accessories."
              : "Explora nuestra amplia gama de productos y accesorios de tecnología de vanguardia."}
          </h3>
          <button className={styles.btn_white}>
            {language === "en" ? "Subscribe" : "Suscribirse"}
          </button>
          <button className={styles.btn_black}>
            {language === "en" ? "Shop now" : "Comprar ahora"}
          </button>
        </div>
        <div className={styles.image}>
          <img src="./laptop.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portada;
