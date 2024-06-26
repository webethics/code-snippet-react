import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const navigate = useNavigate();
    const setToken = (token: string) => {
        Cookies.set("token", token);
    };
    const logout = () => {
        Cookies.remove("token");
        navigate("/auth");
        
    };

    const islogin = Cookies.get("token");

    return {
        setToken,
        logout,
        islogin,
    };
};

export default useAuth;
