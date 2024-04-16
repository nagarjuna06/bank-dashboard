import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Navigate to="/dashboard/home" />} />
        <Route path="/dashboard/:tab" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
