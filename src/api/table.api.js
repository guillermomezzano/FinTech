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
//Libro mayor con tempo como primary key de cuenta
export const getLibroMayor= async (tempo) => {
  let changeableUrl = `${url}/getLibroMayor/0`;
  if (tempo) {
    changeableUrl = `${url}/getLibroMayor/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
};
//libro diario del mes actual
export const getLibroDiario = async () => {
  let changeableUrl = `${url}/getLibroDiario/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
