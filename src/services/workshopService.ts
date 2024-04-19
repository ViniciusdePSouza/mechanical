import { api } from "./api";

export async function getWorkshops(
  associationCode?: number,
  associateCpf?: string
) {
  const resource = "/Api/Oficina";

  const associationCodeParam = associationCode
    ? `codigoAssociacao=${associationCode}`
    : "";
  const associateCpfParam = associateCpf ? `&associateCpf=${associateCpf}` : "";

  
  const url = resource + '?' + associationCodeParam + associateCpfParam
  const response = await api.get(url);

 return response.data['ListaOficinas'];
}
