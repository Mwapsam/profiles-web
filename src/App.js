import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Profile, Register } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
