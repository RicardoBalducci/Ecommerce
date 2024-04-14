import "./App.css";
import Principal from "./module/principal/principal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
      </Routes>
    </Router>
  );
}

export default App;
