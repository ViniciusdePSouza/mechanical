import axios from "axios";
import { AppError } from "../utils/AppError";

const api = axios.create({
  baseURL: "http://app.hinovamobile.com.br/ProvaConhecimentoWebApi",
});

api.interceptors.request.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      Promise.reject(new AppError(error.message));
    } else {
      Promise.reject(error);
    }
  }
);

export { api };
