import { Route, Routes } from "react-router-dom";
import Login from "../App";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import RequestValidation from "../pages/RequestValidation";
import ProtectedRoute from "./ProtectedRoute";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-validation" element={<RequestValidation />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
