import axios from "axios";
const url = "http://localhost:4000";

//Compara compras de clientes por mes o año
export const getComparaClientesMesYear= async (tempo) => {
  let changeableUrl = `${url}/getComparaClientesMesYear/ys`;
  if (tempo) {
    changeableUrl = `${url}/getComparaClientesMesYear/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//Ventas por Mes
export const getVentasMes= async (tempo) => {
  let changeableUrl = `${url}/getVentasMes/5`;
  if (tempo) {
    changeableUrl = `${url}/getVentasMes/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//compara compra vs venta por mes
export const getComparaCompraVenta= async (tempo) => {
  let changeableUrl = `${url}/getComparaCompraVenta/5`;
  if (tempo) {
    changeableUrl = `${url}/getComparaCompraVenta/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//compara compra vs venta por mes
export const getComparaIvaCompra= async (tempo) => {
  let changeableUrl = `${url}/getComparaIvaCompra/5`;
  if (tempo) {
    changeableUrl = `${url}/getComparaIvaCompra/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//compara compra vs venta por mes
export const getComparaIvaVenta= async (tempo) => {
  let changeableUrl = `${url}/getComparaIvaVenta/5`;
  if (tempo) {
    changeableUrl = `${url}/getComparaIvaVenta/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//compara venta con la venta del año anterior
export const getVentasMesComparaYear= async (tempo) => {
  let changeableUrl = `${url}/getVentasMesComparaYear/mes`;
  if (tempo) {
    changeableUrl = `${url}/getVentasMesComparaYear/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//datos de la deuda de clientes dentro y fuera de plazo
export const getDeudasClientes= async (tempo) => {
  let changeableUrl = `${url}/getDeudasClientes/5`;
  if (tempo) {
    changeableUrl = `${url}/getDeudasClientes/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
//datos de la deuda de un unico cliente dentro y fuera de plazo
export const getDeudaClienteUnico= async (tempo) => {
  let changeableUrl = `${url}/getDeudaClienteUnico/0`;
  if (tempo) {
    changeableUrl = `${url}/getDeudaClienteUnico/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}