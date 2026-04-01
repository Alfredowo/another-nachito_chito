import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const runSync = () => api.post("/sync");
export const getLogs = () => api.get("/logs");
export const getRecords = () => api.get("/records");