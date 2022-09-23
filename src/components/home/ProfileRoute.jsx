/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
import { useGetProfileDetailQuery } from '../../redux/users/userSlice';

const ProfileRoute = ({ children }) => {
  const {
    data: profile, isLoading, isSuccess, isError, error,
  } = useGetProfileDetailQuery();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error}</p>}
      {isSuccess && profile.user ? children : <Navigate to="/profile" />}
      {isSuccess && console.log(profile.user)}
    </>
  );
};

export default ProfileRoute;
