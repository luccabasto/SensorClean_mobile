import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

interface Sensor {
  id: number;
  nome: string;
  status: string;
}

export type CreateSensorData = {
  nome: string;
  status: string;
  localizacao: string;
};

export const getSensores = () => api.get("/sensores");
export const getSensor = (id: number): Promise<{ data: Sensor }> => api.get(`/sensores/${id}`);

export const createSensor = (data: CreateSensorData): Promise<{ data: Sensor }> => api.post("/sensores", data);
interface UpdateSensorData {
  nome?: string;
  status?: string;
}

export const updateSensor = (id: number, data: UpdateSensorData): Promise<{ data: Sensor }> => api.put(`/sensores/${id}`, data);
export interface DeleteSensorResponse {
  data: {};
}

export const deleteSensor = (id: number): Promise<DeleteSensorResponse> => api.delete(`/sensores/${id}`);

export default api;
