import { IndicateFriendPostBody } from "../@types";
import { api } from "./api";

export async function postFriend(body: any ) {
  const resource = "/Api/Indicacao";

  const response = await api.post(resource, body);

  return response.data
}