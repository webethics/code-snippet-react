import axios from "axios";
import Cookies from "js-cookie";
import { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../config/baseUrl";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
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
            Cookies.remove("token");
            window.location.replace("/auth");
        }
        return Promise.reject(error);
    }
);

interface RequestArgs {
    url: string;
    method: string;
    body?: any;
}

//for rtk query only
export const axiosBaseQuery = async (
    args: RequestArgs,
    api: any,
    extraOptions: AxiosRequestConfig
) => {
    const { url, method, body } = args;
    try {
        const result = await axiosInstance({
            url,
            method,
            data: body,
            ...extraOptions,
        });
        return { data: result.data };
    } catch (error: any) {
        return {
            error: { status: error.response.status, data: error.response.data },
        };
    }
};

export default axiosInstance;
