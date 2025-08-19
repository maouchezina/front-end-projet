import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, admin }) => {
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  if (!token) return <Navigate to="/login" />;
  if (admin && userStr) {
    console.log(userStr)
const user = userStr ? JSON.parse(userStr) : null;
    
   //const user = JSON.parse(userStr);
    if (user.Role !== 'admin') return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
