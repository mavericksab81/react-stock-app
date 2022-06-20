import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth.actions";
import Common from "../Common/Common";
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: null,
    password: null
  });

  const dispatch: any = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { message } = useSelector((state: any) => state.auth);
  
  const handleRegistration = (data: any) => {
    setData({...data, email: data.email, password: data.password });
    dispatch(login(data));
  }
  const handleError = (errors: any) => {};

  const registerOptions = {
    email: { required: "Email is required" },
    password: {
      required: "Password is required"
    }
  };

  useEffect(() => {
    return () => {
    };
  }, [])

  return (
    <>
      <Common />
      <div className="login-box">
      { data.email && data.password && <label>{ message }</label> }
      <h3>Sign in here</h3>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="sub-content">
          <input className="inp"
            type="text" placeholder="Email/ username"
            {...register('email', registerOptions.email)}
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div className="sub-content">
          <input className="inp"
            type="password" placeholder="Password"
            {...register('password', registerOptions.password)}
          />
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
        </div>
        <div className="sub-content">
          <button className="btn-login">Log In</button>
          <label 
            style={{color: '#7a73ff', cursor: 'pointer', textDecoration: 'underline'}}
            onClick={() => { navigate('/register') }}>Register here</label>
        </div>
      </form>
      </div>
    </>
  );
};
export default LoginPage;