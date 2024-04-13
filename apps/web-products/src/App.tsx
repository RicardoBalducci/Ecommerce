import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={async () => {
          const responsive = await fetch("/api");
          const data = await responsive.text();
          alert(data);
        }}
      >
        Click en 2
      </button>
    </>
  );
}

export default App;
