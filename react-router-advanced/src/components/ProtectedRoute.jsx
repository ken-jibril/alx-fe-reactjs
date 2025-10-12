import React from 'react';
import { Navigate } from 'react-router-dom';

// ✅ Simulated authentication hook
export function useAuth() {
  // in a real app, this would check tokens or user state
  const user = { isAuthenticated: true }; // change to false to test redirect
  return user;
}

// ✅ Protected route component
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // redirect unauthenticated users to home page
    return <Navigate to="/" replace />;
  }

  return children;
}
