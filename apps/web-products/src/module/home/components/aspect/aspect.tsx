import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShield,
  faUserGroup,
  faGaugeHigh,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./css/aspect.module.css";
function Aspect() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Aspectos</h1>
      <h3 className={styles.h3}>
        ¡Descubre tecnología de punta en nuestra tienda!
      </h3>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faShield} />
        </div>
        <h2 className={styles.h2}>Seguridad</h2>
        <p className={styles.text}>
          Clothing made from Mareep’s fleece is easily charged with static
          electricity, so a special process is used on it.Normally, it lived on
          shallow sea shoals. When the tide went out, this Pokémon came up on
          land to search for prey.Charmeleon mercilessly
        </p>
      </div>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faUserGroup} />
        </div>
        <h2 className={styles.h2}>Confianza</h2>
        <p className={styles.text}>
          Clothing made from Mareep’s fleece is easily charged with static
          electricity, so a special process is used on it.Normally, it lived on
          shallow sea shoals. When the tide went out, this Pokémon came up on
          land to search for prey.Charmeleon mercilessly
        </p>
      </div>
      <div className={styles.cuadro}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faGaugeHigh} />
        </div>
        <h2 className={styles.h2}>Rapidez</h2>
        <p className={styles.text}>
          Clothing made from Mareep’s fleece is easily charged with static
          electricity, so a special process is used on it.Normally, it lived on
          shallow sea shoals. When the tide went out, this Pokémon came up on
          land to search for prey.Charmeleon mercilessly
        </p>
      </div>
    </div>
  );
}

export default Aspect;
