import styles from "./menu.module.css";
function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <ul className={styles.menu_list}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu; /*
import styles from "./menu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <div className={styles.menu_container}>
      <h1 className={styles.h1}>Techno Warehouse</h1>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active text-white"
            aria-current="page"
            href="#"
            id={styles.a}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" id={styles.a}>
            Products
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" id={styles.a}>
            Aspect
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" id={styles.a}>
            Customers
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#" id={styles.a}>
            Customers
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Menu;
*/
