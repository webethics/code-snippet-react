import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Products from "../pages/Products";
import AuthProvider from "../authentication";

const routes = [
    { path: "/", element: <Products />, isPrivate: true },
    { path: "/auth", element: <Auth />, isPrivate: false },
];

function RouteContainer(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <AuthProvider isPrivate={route.isPrivate}>
                                {route.element}
                            </AuthProvider>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default RouteContainer;
