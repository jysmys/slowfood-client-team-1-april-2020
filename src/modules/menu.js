import axios from "axios"

const getMenu = async ()=> {
  let headers
  headers = JSON.parse(headers);
  headers = {
    'content-type':'application/json',
    Accept: "application/json",
  }
const response = await axios.get("/products",{headers: headers})
 return response
} ;
export {getMenu};
