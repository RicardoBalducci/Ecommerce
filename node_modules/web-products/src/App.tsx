import "./App.css";
import Principal from "./module/principal/principal";

function App() {
  return (
    <>
      <Principal></Principal>
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
  );
}

export default App;
