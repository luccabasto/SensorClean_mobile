import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // json-server rodando local
});

export const getSensores = () => api.get("/sensores");
export const getSensor = (id) => api.get(`/sensores/${id}`);
export const createSensor = (data) => api.post("/sensores", data);
export const updateSensor = (id, data) => api.put(`/sensores/${id}`, data);
export const deleteSensor = (id) => api.delete(`/sensores/${id}`);

export default api;
