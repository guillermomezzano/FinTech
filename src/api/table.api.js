import axios from "axios";
const url = "http://localhost:4000";

//lista de clientes resumida
export const getLibroAuxiliarClienteResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarClienteResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
//lista de ventas resumida
export const getLibroAuxiliarVentaResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarVentaResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
