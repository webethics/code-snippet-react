import { useState } from "react";
import { ReactElement } from "react";
import Button from "./formElements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { LoginType } from "../types/auth";
import ErrorMessage from "./ErrorMessage";
import { login } from "../services/authService";
import { toast } from "react-toastify";
import useAuth from "../authentication/useAuth";
import { invalidateTagsAfterLogin } from "../store/slices/prodcuts";
import { useDispatch } from "react-redux";

export default function SignIn(): ReactElement {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>();
    const { setToken } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginType>();

    const onSubmit: SubmitHandler<LoginType> = async (data) => {
        setLoading(true);
        try {
            await login({ email: data.email, password: data.password });
            invalidateTagsAfterLogin(dispatch);
            toast.success("Login successful");
            setToken("false_token");
            navigate("/");
        } catch (err) {
            toast.error("somthing went wrong please try again");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="custom-container text-center mt-10">
                <div className="custom-small-container">
                    <h1 className="text-3xl font-bold mb-6">Sign in</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-left mb-2"
                            >
                                Email address
                            </label>
                            <input
                                {...register("email", {
                                    required: "email is required",
                                })}
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter email"
                            />
                            <ErrorMessage error={errors?.email?.message} />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-left mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Password"
                                {...register("password", {
                                    required: "password is required",
                                })}
                            />
                            <ErrorMessage error={errors?.password?.message} />
                        </div>

                        <Button
                            classes="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            attributes={{
                                type: "submit", // Change type to "button" to prevent form submission
                                disabled: false,
                                value: "Login",
                                loader: loading,
                            }}
                        />
                    </form>
                </div>
                <div className="custom-small-container border-none py-0">
                    <span className="block mb-2">
                        Enter fake email and password to proceed
                    </span>
                    <p className="text-sm">
                        By selecting ‘Request verification code’ you agree to
                        our{" "}
                        <Link to="/terms" className="text-blue-500">
                            Terms of Service
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
}
