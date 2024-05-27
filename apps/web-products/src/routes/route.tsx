import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../module/register/register";

function Rutas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default Rutas;

/*
import Principal from "../module/Principal/index";
import AcercaDe from "../module/AcercaDe";

<Route path="/AcercaDe" element={<AcercaDe />} />
*/
