import axios from "axios";

const getMenu = async () => {
  // let headers = {
  //   "content-type": "application/json",
  //   Accept: "application/json",
  // };
  const response = await axios.get("/api/v1/products");
  return response;
};
export { getMenu };
