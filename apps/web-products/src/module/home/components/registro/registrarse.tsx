//import Swal from "sweetalert2";
import styles from "./css/registrarse.module.css";
import { LenguajeInterface } from "../../../../interface/InterfaceLenguaje";

function Registrarse({ language }: LenguajeInterface) {
  /*
  
  function guardar() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  }
  */
  {
    language === "en" ? "Discover the latest" : "Descubre lo último";
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>
        {language === "en"
          ? "Register for more information"
          : "Registrate para más información"}
      </h1>
      <p className={styles.h3}>
        {language === "en"
          ? "Subscribe to our newsletter to receive the latest news, product updates and exclusive offers."
          : "Suscríbase a nuestro boletín para recibir las últimas noticias, actualizaciones de productos y ofertas exclusivas."}
      </p>
      <form action="">
        <input
          type="text"
          placeholder={
            language === "en" ? "Enter your email" : "Ingrese su correo"
          }
          className={styles.input}
        />
        <button className={styles.btn}>
          {language === "en" ? "Check in" : "Registrarse"}
        </button>
      </form>
      <p className={styles.p}>
        {language === "en"
          ? "We respect your privacy. Your email will not be shared with any third parties."
          : "Respetamos tu privacidad. Su correo electrónico no será compartido con ningún tercero.fiestas."}
      </p>
    </div>
  );
}

export default Registrarse;
/*
 <h1>Registrate para más información</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="button" onClick={handleEnviarCorreoClick}>
        Enviar Correo
      </button>
*/
