import React, { Component } from 'react'
import { Navigate,Outlet } from 'react-router-dom';

/**export default class ProtectedRoute extends Component {
  render() {
      const Component = this.props.element;
      const isAuthenticated = localStorage.getItem('isOk');
    return isAuthenticated ?( <Component />) : <Navigate to="/login" />;
  }
} **/
const useAuth = () => {
const user = {loggedIn: localStorage.getItem('token')};
return user && user.loggedIn;
}

const ProtectedRoute = () => {
  const isAuthenticated = useAuth();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
}
export default ProtectedRoute

