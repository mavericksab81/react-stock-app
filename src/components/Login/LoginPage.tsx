import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/actions/auth.actions";
import Common from "../Common/Common";
import './LoginPage.css';
import companyLogo from '../../images/logo.png';

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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'translate(0%, 25%)'}}>
        <div style={{display: 'flex', flexDirection: 'row', gap: '2em', alignItems: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src={companyLogo} alt="stockbook" style={{width: '15em'}} />
            <label className="company-desc">Stockbook helps you keep updated on all the latest stock updates.</label>
          </div>
          <div className="box box-h-w">
            <form onSubmit={handleSubmit(handleRegistration, handleError)}>
              <div className="sub-content">
                <input className="inp"
                  type="text" placeholder="Email address or username"
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
              </div>
              <div className="sub-content" style={{alignItems: 'center'}}>
                <a href="/" className="link">Forgotten password?</a>
              </div>
              <div className="seperator"></div>
              <div className="sub-content reg-btn">
                <button className="btn-login reg-color"
                  onClick={() => { navigate('/register') }}>Create new account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;