import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const AuthProvider = ({
    children,
    isPrivate,
}: {
    children: any;
    isPrivate: boolean;
}) => {
    const { islogin } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isPrivate && !islogin) {
            navigate("/auth");
        } else if (!isPrivate && islogin) {
            navigate("/");
        } else {
            return;
        }
    }, [islogin]);

    return children;
};

export default AuthProvider;
