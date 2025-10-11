import { Route, Routes } from "react-router-dom";
import Login from "../App";
import Dashboard from "../pages/Dashboard";

function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default AppRoute;