import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PhoneAuth from "../pages/PhoneAuth";
import Projects from "../pages/Projects";

const routes = [
    { path: "/", element: <Navigate to="/auth" /> },
    { path: "/auth", element: <PhoneAuth /> },
    { path: "/projects", element: <Projects /> },
];

function RouteContainer(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteContainer;
