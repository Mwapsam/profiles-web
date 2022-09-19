import React from 'react';
import { useGetUserQuery } from '../../redux/users/userSlice';

const Profile = () => {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = JSON.stringify(user);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <>
      {content}
    </>
  );
};

export default Profile;
