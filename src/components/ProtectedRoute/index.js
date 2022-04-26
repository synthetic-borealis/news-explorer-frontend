import { Route, Redirect } from "react-router-dom";
import { routePaths } from "../../utils/constants";

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  return (
    <Route {...props}>
      {isLoggedIn ? children : <Redirect to={routePaths.home} />}
    </Route>
  );
}

export default ProtectedRoute;
