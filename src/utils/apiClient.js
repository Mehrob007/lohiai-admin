import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const getToken = () => {
    return localStorage.getItem("token")
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: "application/json",
});

apiClient.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      document.location.href = "/login";
      console.warn("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  },
);
 
export default apiClient;
