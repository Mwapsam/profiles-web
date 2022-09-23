/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProfileRoute = ({ children }) => {
  const id = Cookies.get('user');
  return id ? children : <Navigate to="/profile" />;
};

export default ProfileRoute;
