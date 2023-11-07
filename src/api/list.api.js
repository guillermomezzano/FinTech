import axios from "axios";
const url = "http://localhost:4000";

//lista de clientes
export const getListaClientes = async () => {
  let changeableUrl = `${url}/getListaClientes/`;
  console.log("URL = ", changeableUrl);
  return await axios.get(changeableUrl);
};
