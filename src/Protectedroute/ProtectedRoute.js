import React from 'react';
import { Navigate } from 'react-router-dom';

// First ProtectedRoute component
export const ProtectedRoute = ({ element: Component }) => {
  // Check if a token exists in local storage
  const token = localStorage?.getItem('access_token');

  if (token != null) {
    return <Component />;
  } else {
    // Redirect to the admin page if the token doesn't exist
    return <Navigate to="/login" replace />;
  }
};

