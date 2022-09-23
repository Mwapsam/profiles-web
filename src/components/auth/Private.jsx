/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Private = ({ children }) => {
  const token = Cookies.get('jwt');

  return token ? children : <Navigate to="/login" />;
};

export default Private;
