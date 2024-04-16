import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const authenticated = sessionStorage.getItem("__token");
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
