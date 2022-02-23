import axios from "axios";

export const baseURL = "http://192.168.100.22:8000/";

export const instance = axios.create({
  baseURL: `${baseURL}api`,
  //baseURL: "http://192.168.100.22:8000/api",
});
