import axios from "axios";
const url = "http://localhost:4000";

// tablas resumidas

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

export const getLibroAuxiliarCompraResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarCompraResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarProveedorResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarProveedorResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarIngresoResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarIngresoResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarEgresoResumido = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarEgresoResumido/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

// tablas completas

export const getLibroAuxiliarVentaCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarVentaCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarCompraCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarCompraCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarClienteCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarClienteCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarProveedorCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarProveedorCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarIngresoCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarIngresoCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getLibroAuxiliarEgresoCompleto = async () => {
  let changeableUrl = `${url}/getLibroAuxiliarEgresoCompleto/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

export const getComprobanteLibro = async () => {
  let changeableUrl = `${url}/getComprobanteLibro/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};

//Libro mayor con tempo como primary key de cuenta
export const getLibroMayor = async (tempo) => {
  let changeableUrl = `${url}/getLibroMayor/0`;
  if (tempo) {
    changeableUrl = `${url}/getLibroMayor/${tempo}`;
  }
  try {
    console.log("URL = ", changeableUrl);
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
