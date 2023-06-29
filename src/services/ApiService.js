import axios from "axios";
import { getToken } from "../utilis/cache";

 const headers={
  "Content-Type" :"application/json",
  Accept :"application/json"
 };
export const ApiCall= async (url,method,data)=>{
  const token =getToken();
  if(token){
    headers.Authorization =`Bearer ${token}`;
  }
  axios.defaults.headers =headers;
   return await axios[method](url,data)
    .then((response)=>{
      return response.data;
    })
}