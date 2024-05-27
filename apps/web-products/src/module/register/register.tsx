import style from "./css/register.module.css";
function Register() {
  return (
    <form action="">
      <div>
        <label className={style.Titulo}>Nombre</label>
        <input type="text" id="nombre" />
      </div>
      <div>
        <label htmlFor="correo" className={style.Titulo}>
          Correo
        </label>
        <input type="text" id="correo" />
      </div>
      <div>
        <label htmlFor="contraseña" className={style.Titulo}>
          Contraseña
        </label>
        <input type="password" id="contraseña" />
      </div>
    </form>
  );
}

export default Register;
