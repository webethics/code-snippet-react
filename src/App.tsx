import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import RouteContainer from "./routes";
import { ToastContainer } from "react-toastify";

function App(): JSX.Element {
    return (
        <>
            <RouteContainer />
            <ToastContainer />
        </>
    );
}

export default App;
