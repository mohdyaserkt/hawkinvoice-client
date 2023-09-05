import axios, { AxiosError, AxiosInstance } from "axios";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const User = JSON.parse(localStorage.getItem("AccessToken") as string);
    if (User) {
      const AccessToken = User;
      if (AccessToken) {
        config.headers["Authorization"] = `Bearer ${AccessToken}`;
      }

      const currentOrganization = JSON.parse(localStorage.getItem("currentOrganization") as string);
      console.log("this is my current company id ",currentOrganization);
      

      if (currentOrganization) {
        config.headers["currentOrganization"] = currentOrganization;
      }
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
