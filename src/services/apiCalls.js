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

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/users/login", data);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.name);
    localStorage.setItem("role", response.data.role);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTreatments = async () => {
  try {
    const response = await axiosInstance.get("/treatments/all");
    return response.data.treatments;
  } catch (error) {
    console.log(error);
  }
};

export const createTreatment = async (data) => {
  try {
    await axiosInstance.post("/treatments/create", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
