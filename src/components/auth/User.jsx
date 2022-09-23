import React from 'react';
import Cookies from 'js-cookie';
import { useGetUserQuery } from '../../redux/users/userSlice';
import New from './New';

const User = () => {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = user;
    Cookies.set('user', content.id, { expires: 0.5 });
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <>
      <New content={content} />
    </>
  );
};

export default User;
