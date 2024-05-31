import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Menu() {
  return (
    <div className={styles.menu_container}>
      <h1 className={styles.h1}>Techno Warehouse</h1>
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className={`navbar-toggler ${styles.navbar_toggler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className={`navbar-toggler-icon ${styles.navbar_toggler_icon}`}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
                id={styles.a}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-link text-white"
                id={styles.a}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aspect" className="nav-link text-white" id={styles.a}>
                Aspect
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/customers"
                className="nav-link text-white"
                id={styles.a}
              >
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/customers"
                className="nav-link text-white"
                id={styles.a}
              >
                Customers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
