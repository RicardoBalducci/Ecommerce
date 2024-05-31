import Portada from "./components/portada/portada";
//import Menu from "../../components/menu/menu";
import Products from "./components/products/products";
import Aspect from "./components/aspect/aspect";
import styles from "./css/home.module.css";
import Menu from "../../components/menu/menu";
function Home() {
  return (
    <>
      <Menu />
      <Portada />
      <div className={styles.espacio} />
      <Products />
      <div className={styles.espacio} />
      <Aspect />
    </>
  );
}

export default Home;
/*
 const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };


  
      <button onClick={handleRegisterClick}>Register</button>
      <button onClick={handleLoginClick}>Login</button>
*/
