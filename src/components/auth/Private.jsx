/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGetUserQuery } from '../../redux/users/userSlice';

const Private = ({ children }) => {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = user;
  } else if (isError) {
    content = <p>{error}</p>;
  }
  Cookies.set('user', content, { expires: 0.5 });
  return content ? children : <Navigate to="/new" />;
};

export default Private;
