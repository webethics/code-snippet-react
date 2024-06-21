import axiosInstance from ".";
import { LoginType } from "../types/auth";

export const login = (payload: LoginType) => {
    console.log(payload);
    return axiosInstance.post("/auth/login", {
        username: "mor_2314",
        password: "83r5^_",
    });
};
