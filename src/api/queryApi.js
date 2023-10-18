import axios from "axios";
const url = "http://localhost:4000";

// prueba revisa lo que hay en la tabla honorarios
export const getHonorarios = async () => await axios.get(`${url}/tasksH`); // allHonorarios

// obtengo la compra y venta por el valor en tiempo de la variable tempo
export const getCompraVenta = async (tempo) => {
  let changeableUrl = `${url}/tasksV/5`; //ventasTempo
  if (tempo) {
    changeableUrl = `${url}/tasksV/${tempo}`;
  }
  try {
    console.log("URL = ", changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
};
// compara compras y ventas por mes
export const getCV = async (tempo) => {
  let changeableUrl = `${url}/tasksCV/5`; //ventas
  if (tempo) {
    changeableUrl = `${url}/tasksCV/${tempo}`;
  }
  try {
    console.log("URL = ", changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
};
export const getTasksVCl = async (tempo) => {
  let changeableUrl = `${url}/tasksVCl/ys`;
  if (tempo) {
    changeableUrl = `${url}/tasksVCl/${tempo}`;
  }
  try {
    console.log("URL = ", changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
};
export const getTaskVM = async (tempo) => {
  let changeableUrl = `${url}/tasksVM/mes`;
  if (tempo) {
    changeableUrl = `${url}/tasksVM/${tempo}`;
  }
  try {
    console.log("URL = ", changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
};
