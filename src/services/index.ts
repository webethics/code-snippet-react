import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
});
axiosInstance.interceptors.request.use(
    (config) => {
        const token: string | null = localStorage.getItem("token");
        if (token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    async (error) => {
        return await Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.replace("/auth");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
