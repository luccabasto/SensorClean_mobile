import axios from "axios";

// Troque o localhost pelo IP da sua máquina caso teste em dispositivo real!
const api = axios.create({
  baseURL: "http://localhost:3001",
});

// Interface completa de sensor
export interface Sensor {
  id: number;
  nome: string;
  status: string;
  localizacao: string;
}

export type CreateSensorData = {
  nome: string;
  status: string;
  localizacao: string;
};

export type UpdateSensorData = {
  nome?: string;
  status?: string;
  localizacao?: string;
};

export const getSensores = () => api.get<Sensor[]>("/sensores");

export const getSensor = (id: number) => api.get<Sensor>(`/sensores/${id}`);

export const createSensor = (data: CreateSensorData) =>
  api.post<Sensor>("/sensores", data);

export const updateSensor = (id: number, data: UpdateSensorData) =>
  api.put<Sensor>(`/sensores/${id}`, data);

export const deleteSensor = (id: number) => api.delete(`/sensores/${id}`);

export default api;
