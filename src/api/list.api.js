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

//crear un nuevo cliente
export const postEmpresa = async (data) => {
  changeableUrl = `${url}/createUsuario/`;
  console.log("URL = ", changeableUrl);
  return await axios.post(changeableUrl, data);
};

// infomrmacion de un libro especifico compra/venta
export const getLibroEspecifico = async (PK) => {
  changeableUrl = `${url}/getLibroEspecifico/${PK}`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

//cuentas sugeridas
export const getCuentasSugeridas = async (PK) => {
  changeableUrl = `${url}/getCuentasSugeridas/${PK}`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

//todas las cuentas
export const getTodasCuentas = async (PK) => {
  changeableUrl = `${url}/getTodasCuentas/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
