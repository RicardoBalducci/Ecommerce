import React, { useState } from "react";
import style from "./css/register.module.css";
import Swal from "sweetalert2";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento de envío de formulario predeterminado

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData), // Utilizar formData directamente
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Manejar la respuesta exitosa
        Swal.fire({
          title: "Guardado",
          text: "Fue registrado exitosamente",
          icon: "success",
        });
        //ESTE ES EL LOGIN, DEBE REDIRECCIONAR AL USUARIO
        //PARA EL REGISTRAR, SE DEBE GUARDAR AL USUARIO Y REDIRECCIONARLO PARA ACA
      } else {
        Swal.fire({
          title: "Error",
          text: "Verifique los datos",
          icon: "error",
        });
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h1>Registrate</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre de usuario"
            className={style.inputs}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Ingrese correo electronico"
            value={formData.email}
            className={style.inputs}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Ingrese contraseña"
            value={formData.password}
            onChange={handleChange}
            className={style.inputs}
          />
        </div>
        <button className={style.button} type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
