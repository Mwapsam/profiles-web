import { Routes, Route } from 'react-router-dom';
import {
  Home, Login, User, Profile, Register, Private, Verification, ProfileRoute,
} from './components';

function App() {
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
