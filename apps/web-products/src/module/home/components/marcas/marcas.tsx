import styles from "./css/marcas.module.css";

function Marcas() {
  return (
    <>
      <div className={styles.Text}>
        <h1></h1>
        <h3></h3>
      </div>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <div className={styles.wrap}>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/hp.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/acer.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/apple.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/Asus.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/huawei.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/hyundai.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/lenovo.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/motorola.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/realme.svg" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/samsung.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/sony.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/tecno.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/toshiba.png" alt="" />
            </div>
            <div className={styles.cuadro}>
              <img className={styles.imagen} src="/xiaomi.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marcas;
