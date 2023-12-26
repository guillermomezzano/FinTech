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

// export const createEmpresa = async (empresa) =>{
//   changeableUrl = "https://api.cymasuite.com/api/v1/company";
//   const { data } = await axios.get(changeableUrl , empresa,
//     {
//       headers: {
//         Authorization: `Bearer ${auth.jwt}`,
//       },
//     },
//   );

//   return await axios.post();

// }
