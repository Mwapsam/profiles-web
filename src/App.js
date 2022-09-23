import { Routes, Route } from 'react-router-dom';
import {
  Home, Login, User, Profile, Register, Private, Verification,
} from './components';

function App() {
  return (

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new" element={<User />} />
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
