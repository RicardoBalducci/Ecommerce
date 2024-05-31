import Customers from "./components/customers/customers";
function Home() {
  return (
    <>
      <Customers />
    </>
  );
}

export default Home;
/*

import Portada from "./components/portada/portada";
import Products from "./components/products/products";
import Aspect from "./components/aspect/aspect";
import styles from "./css/home.module.css";
      <Portada />
      <div className={styles.espacio} />
      <Products />
      <div className={styles.espacio} />
      <Aspect />

 const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };


  
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleLoginClick}>Login</button>
*/
