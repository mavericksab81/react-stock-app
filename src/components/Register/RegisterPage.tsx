import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createUser } from "../../store/actions/auth.actions";
import Common from "../Common/Common";
import './RegisterPage.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: null,
    username: null,
    password: null
  });

  const dispatch: any = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleRegistration = (data: any) => {
    setData({...data, email: data.email, password: data.password, username: data.username });
    dispatch(createUser(data));
  }
  const handleError = (errors: any) => {};

  const registerOptions = {
    email: { required: "Email is required" },
    username: { required: "Username is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
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
      {/* { data.email && data.password && data.username && <label>{ message }</label> } */}
      <h3>Register yourself here</h3>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="sub-content">
          <input className="inp"
            type="email" placeholder="Email"
            {...register('email', registerOptions.email)}
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
        </div>
        <div className="sub-content">
          <input className="inp"
            type="text" placeholder="Username"
            {...register('username', registerOptions.username)}
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
          <button className="btn-login">Register</button>
          <label 
            style={{color: '#7a73ff', cursor: 'pointer', textDecoration: 'underline'}}
            onClick={() => { navigate('/') }}>Back</label>
        </div>
      </form>
      </div>
    </>
  );
};
export default RegisterPage;