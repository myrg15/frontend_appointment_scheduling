import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4001",
});

export const createUser = async (data) => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await axiosInstance.post("/users/register", data, {
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
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
export const getProfile = async () => {
  try {
    const response = await axiosInstance.get("/users/profile");
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
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await axiosInstance.post("/treatments/create", data, {
      Headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateTreatment = async (id, data) => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await axiosInstance.put(
      `/treatments/treatment_update/${id}`,
      data,
      {
        Headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteTreatment = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `/treatments/treatment_delete/${id}`
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createAppointment = async (data) => {
  try {
    await axiosInstance.post("/appointments/appointment_create", data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await axiosInstance.get("/appointments/allAppointments");
    return response.data.appointments;
  } catch (error) {
    console.log(error);
  }
};
