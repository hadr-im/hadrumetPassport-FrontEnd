import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuth(); // Get user from AuthContext

  if (!user) { // If no user (meaning no token/user data)
    return <Navigate to="/login" replace />; // Redirect to login page
  }

  return <Outlet />; // If authenticated, render the child routes
};

export default RequireAuth;