import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Context } from "../contexts/AuthContext";
import { useContext } from "react";

const Paths = () => {

    const { logado } = useContext(Context);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    {
                        logado && (
                            <>
                                <Route path="/home" element={<Home />} />
                            </>
                        )
                    }

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Paths;