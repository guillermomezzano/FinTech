import axios from "axios";
const url = "http://localhost:4000";

//lista de clientes
export const getListaClientes = async () => {
  let changeableUrl = `${url}/getListaClientes/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
//lista de cuentas
export const getListaCuentas = async () => {
  let changeableUrl = `${url}/getListaCuentas/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
