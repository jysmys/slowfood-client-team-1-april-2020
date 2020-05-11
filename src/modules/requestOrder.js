import axios from "axios";

const getOrder = async () => {
  const response = await axios.get("/orders");
  return response;
};
export { getOrder };
