import { LenguajeInterface } from "../../interface/InterfaceLenguaje";
import styles from "./footer.module.css";

function Footer({ language }: LenguajeInterface) {
  return (
    <div className={styles.footer}>
      <div className={styles.cuadro}>
        <h1 className={styles.h1}>
          {language === "en"
            ? "© 2023 Technowarehouse. All rights reserved."
            : "© 2023 Technowarehouse. Reservados todos los derechos."}
        </h1>
      </div>
    </div>
  );
}

export default Footer;
