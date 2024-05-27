import styles from "./button.module.css";

function Boton() {
  return (
    <>
      <h1 className={styles.Boton}>Titulo</h1>
      <h4 className={styles.sub}> subtitulo</h4>
    </>
  );
}

//<button className={styles.Boton}>Hola mundo</button>
export default Boton;
