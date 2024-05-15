import "./App.css";

function App() {
  return (
    <>
      <button
        onClick={async () => {
          const data = 1 + 1;
          alert(data);
        }}
      >
        Click aqui
      </button>
    </>
  );
}

export default App;
