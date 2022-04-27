import { Navigate } from "react-router-dom";
import { routePaths } from "../../utils/constants";

function ProtectedRoute({ children, isLoggedIn, onNoLogin }) {
  if (!isLoggedIn) {
    if (typeof onNoLogin === "function") {
      onNoLogin();
    }
    return <Navigate to={routePaths.home} />;
  }
  return children;
}

export default ProtectedRoute;
