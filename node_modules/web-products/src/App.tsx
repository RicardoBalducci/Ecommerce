import Rutas from "./routes/route";
import styles from "./app.module.css";
function App() {
  return (
    <div className={styles.Body}>
      <Rutas />
    </div>
  );
}

export default App;

/*
<>
      <button
        onClick={async () => {
          const responsive = await fetch("/api");
          const data = await responsive.text();
          alert(data);
        }}
      >
        Click aqui
      </button>
    </>
*/
