import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    alert("You must be logged in to view this page!");
    return <Navigate to="/" replace />;
  }
  return children;
}
