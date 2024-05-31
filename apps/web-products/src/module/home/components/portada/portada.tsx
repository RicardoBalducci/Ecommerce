import styles from "./css/portada.module.css";

function Portada() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Discover the latest</h1>
          <h1>Tech Trends</h1>
          <h3>
            Explore our wide range of cutting-edge technology products and
            accessories.
          </h3>
          <button className={styles.btn_white}>Subscribe</button>
          <button className={styles.btn_black}>Shop now</button>
        </div>
        <div className={styles.image}>
          <img src="./laptop.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portada;
