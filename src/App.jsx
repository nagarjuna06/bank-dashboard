import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <ProtectedRoute />,
    errorElement: <Navigate to="/login" />,
    children: [
      {
        path: "/dashboard",
        element: <Navigate to="/dashboard/home" />,
      },
      {
        path: "/dashboard/:tab",
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
