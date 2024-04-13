export async function Prueba() {
  const responsive = await fetch("/api");
  const data = await responsive.text();
  alert(data);
}
