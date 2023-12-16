import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
});

export const createUser = async (data) => {
  try {
    await axiosInstance.post("/users/register", data);
    return true;
  } catch (error) {
    console.log(error);
  }
};
