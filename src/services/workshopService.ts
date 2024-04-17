import { api } from "./api";

export async function getWorkshops() {
  const resource = "/Api/Oficina";

  const response = await api.get(resource);

  return response 
}
