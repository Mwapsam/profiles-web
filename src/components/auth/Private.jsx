/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useGetUserQuery } from '../../redux/users/userSlice';

const Private = ({ children }) => {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();
  const id = Cookies.get('user');

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {isSuccess && id ? children : <Navigate to="/login" />}
      {isSuccess && Cookies.set('user', user, { expires: 0.5 })}
    </>
  );
};

export default Private;
