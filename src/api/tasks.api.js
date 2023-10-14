import axios from "axios";
const url = "http://localhost:4000";

export const getTaskH= async () => 
    await axios.get(`${url}/tasksH`);

export const getTaskV= async (tempo) => {
  let changeableUrl = `${url}/tasksV/5`;
  if (tempo) {
    changeableUrl = `${url}/tasksV/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}

export const getCV= async (tempo) => {
  let changeableUrl = `${url}/tasksCV/5`;
  if (tempo) {
    changeableUrl = `${url}/tasksCV/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
export const getTasksVCl= async (tempo) => {
  let changeableUrl = `${url}/tasksVCl/ys`;
  if (tempo) {
    changeableUrl = `${url}/tasksVCl/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}
export const getTaskVM= async (tempo) => {
  let changeableUrl = `${url}/tasksVM/mes`;
  if (tempo) {
    changeableUrl = `${url}/tasksVM/${tempo}`;
  }
  try {
    console.log("URL = ",changeableUrl);
    return await axios.get(changeableUrl);
  } catch (err) {
    console.log(err);
  }
}