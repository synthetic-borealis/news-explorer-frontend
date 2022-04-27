import { Navigate } from "react-router-dom";
import { routePaths } from "../../utils/constants";

function ProtectedRoute({ children, isLoggedIn }) {
  if (!isLoggedIn) {
    return <Navigate to={routePaths.home} />;
  }
  return children;
}

export default ProtectedRoute;
