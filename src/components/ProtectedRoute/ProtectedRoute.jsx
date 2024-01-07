import { Route, Navigate } from "react-router-dom";

export default function ProtectedRoute({ element, loggedIn, redirectTo, ...props }) {
  return (
    <Route
      {...props}
      element={loggedIn ? element : <Navigate to={redirectTo} replace />}
    />
  );
}
