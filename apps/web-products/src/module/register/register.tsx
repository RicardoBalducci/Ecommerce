import style from "./css/register.module.css";

function Register() {
  return (
    <form className={style.form} action="">
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="nombre">
          Nombre
        </label>
        <input className={style.input} type="text" id="nombre" />
      </div>
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="correo">
          Correo
        </label>
        <input className={style.input} type="text" id="correo" />
      </div>
      <div className={style.formGroup}>
        <label className={style.label} htmlFor="contraseña">
          Contraseña
        </label>
        <input className={style.input} type="password" id="contraseña" />
      </div>
    </form>
  );
}

export default Register;
