import { LenguajeInterface } from "../../interface/InterfaceLenguaje";
function Footer({ language }: LenguajeInterface) {
  return (
    <>
      <h1>{language === "en" ? "Social red" : "Redes sociales"}</h1>
      <div></div>
    </>
  );
}

export default Footer;
