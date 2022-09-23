import React from 'react';
import Cookies from 'js-cookie';
import { Routes, Route } from 'react-router-dom';
import {
  Home, Login, User, Profile, Register, Private, Verification, ProfileRoute,
} from './components';
import { useGetUserQuery } from './redux/users/userSlice';

function App() {
  const {
    data: user, isLoading, isSuccess, isError, error,
  } = useGetUserQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = user;
    Cookies.set('user', content.id, { expires: 0.5 });
    Cookies.set('all', content);
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Private><Profile /></Private>} />
      <Route path="/new" element={(<ProfileRoute><User /></ProfileRoute>)} />
      <Route path="/email-verification" element={<Verification />} />
      <Route
        path="/"
        element={(
          <Private>
            <Home />
          </Private>
        )}
      />
    </Routes>

  );
}

export default App;
