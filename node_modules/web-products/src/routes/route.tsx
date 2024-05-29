import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../module/register/register";
import Home from "../module/home/home";
import User from "../module/usuario/user";
import Login from "../module/login/login";

function Rutas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default Rutas;
