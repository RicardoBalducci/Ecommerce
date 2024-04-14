import styles from "../css/button.module.css";
function BotonPrincipal() {
  function Prueba() {
    alert("Hola");
  }

  return (
    <>
      <button onClick={Prueba} className={styles["boton-principal"]}>
        Click aqui
      </button>
    </>
  );
}

export default BotonPrincipal;
