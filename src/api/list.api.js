import axios from "axios";
const url = "http://localhost:4000";
let changeableUrl = "";

//lista de clientes
export const getListaClientes = async () => {
  changeableUrl = `${url}/getListaClientes/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
//lista de cuentas
export const getListaCuentas = async () => {
  changeableUrl = `${url}/getListaCuentas/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

//lista de ususario (emprsas) id y nombre
export const getListaUsuarios = async () => {
  changeableUrl = `${url}/getListaUsuarios/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
