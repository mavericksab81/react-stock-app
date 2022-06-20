import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';

function App() {
  const { currentUser } = useSelector((state: any) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={currentUser ?  <HomePage /> :  <Navigate to="/" /> } />
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
