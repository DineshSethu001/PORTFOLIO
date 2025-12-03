import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAdminLoggedIn } = useAuth();

  if (!isAdminLoggedIn) {
    // Redirect to admin login if not authenticated
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedRoute;
