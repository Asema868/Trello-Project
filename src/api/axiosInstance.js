import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://5b579a14ee7587df.mokky.dev",
  headers: {
    Accept: "application/json",
  },
});
