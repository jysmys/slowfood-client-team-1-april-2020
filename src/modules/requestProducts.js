import axios from "axios";

const getMenu = async () => {
  const response = await axios.get("/products");
  return response;
};
export { getMenu };
