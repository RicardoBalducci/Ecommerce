import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LenguajeInterface } from "../../../../interface/InterfaceLenguaje";
import {
  faShield,
  faUserGroup,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./css/aspect.module.css";

function Aspect({ language }: LenguajeInterface) {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {language === "en" ? "Aspects" : "Aspectos"}
      </h1>
      <h3 className={styles.h3}>
        {language === "en"
          ? "Discover cutting-edge technology in our store!"
          : "¡Descubre tecnología de punta en nuestra tienda!"}
      </h3>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faShield} />
        </div>
        <h2 className={styles.h2}>
          {language === "en" ? "Security" : "Seguridad"}
        </h2>
        <p className={styles.text}>
          {language === "en"
            ? "Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it. Normally, it lived on shallow sea shoals. When the tide went out, this Pokémon came up on land to search for prey. Charmeleon mercilessly"
            : "La ropa hecha con la lana de Mareep se carga fácilmente con electricidad estática, por lo que se utiliza un proceso especial en ella. Normalmente, vivía en bancos de mar poco profundos. Cuando la marea bajaba, este Pokémon salía a tierra para buscar presas. Charmeleon sin piedad"}
        </p>
      </div>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
        <h2 className={styles.h2}>
          {language === "en" ? "Trust" : "Confianza"}
        </h2>
        <p className={styles.text}>
          {language === "en"
            ? "Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it. Normally, it lived on shallow sea shoals. When the tide went out, this Pokémon came up on land to search for prey. Charmeleon mercilessly"
            : "La ropa hecha con la lana de Mareep se carga fácilmente con electricidad estática, por lo que se utiliza un proceso especial en ella. Normalmente, vivía en bancos de mar poco profundos. Cuando la marea bajaba, este Pokémon salía a tierra para buscar presas. Charmeleon sin piedad"}
        </p>
      </div>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faGaugeHigh} />
        </div>
        <h2 className={styles.h2}>{language === "en" ? "Speed" : "Rapidez"}</h2>
        <p className={styles.text}>
          {language === "en"
            ? "Clothing made from Mareep’s fleece is easily charged with static electricity, so a special process is used on it. Normally, it lived on shallow sea shoals. When the tide went out, this Pokémon came up on land to search for prey. Charmeleon mercilessly"
            : "La ropa hecha con la lana de Mareep se carga fácilmente con electricidad estática, por lo que se utiliza un proceso especial en ella. Normalmente, vivía en bancos de mar poco profundos. Cuando la marea bajaba, este Pokémon salía a tierra para buscar presas. Charmeleon sin piedad"}
        </p>
      </div>
    </div>
  );
}

export default Aspect;
