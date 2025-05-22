import { Routes, Route, Navigate } from "react-router";
import Home from "../features/home/pages/Home";
import Login from "../features/auth/pages/Login"
import Play from "../features/play/pages/Play";
import Register from "../features/auth/pages/Register";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/play" element={<Play />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default AppRouter;