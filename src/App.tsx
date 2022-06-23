import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const HomePage = lazy(() => import('./components/Home/HomePage'));
const LoginPage = lazy(() => import('./components/Login/LoginPage'));
const RegisterPage = lazy(() => import('./components/Register/RegisterPage'));

function App() {
  const { currentUser } = useSelector((state: any) => state.auth);
  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={currentUser ?  <HomePage /> :  <Navigate to="/" /> } />
          <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
