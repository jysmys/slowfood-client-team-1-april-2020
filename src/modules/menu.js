import axios from "axios";

const getMenu = async () => {
  const response = await axios.get("/api/v1/products");
  return response;
};
export { getMenu };
