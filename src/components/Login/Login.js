import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import img from '../../images/healthcare-logo-png.png'


const Login = () => {
const {signWithGoogle, handleEmailChange, handlePasswordChange, setIsLoading, error, handleEmailLogin } = useAuth();
const location= useLocation();
const history= useHistory();
const redirect_url= location.state?.from || '/home'

const handleGoogle=()=>{
  signWithGoogle()
  .then((result) => {
    history.push(redirect_url)
  })
  .finally(()=> setIsLoading(false));
}
 
  return (
    <div className="login-form">
      <div className="login">
        <img className="login-logo" src={img} alt="" />
        <h3 className="text-white fs-2 fw-bold">Login</h3>
        <form onSubmit={handleEmailLogin}>
          <label className="d-block  text-white" htmlFor="email">Email</label>
          <input onBlur={handleEmailChange} className="text-field" type="email" placeholder="Email" /> <br />
          <label  className="d-block  text-white" htmlFor="Password">Password</label>
          <input onBlur={handlePasswordChange} className="text-field" type="password" placeholder="password"/><br />
          <p>{error}</p>
          <input className="submit" type="submit" value="Login" />
        </form>
        <p className=" text-white">New to Health-Care? <Link className="link text-warning" to="/register"> Create account</Link></p>
        <button className="log-btn" onClick={handleGoogle}>continue with google</button>
      </div>
    </div>
  );
};

export default Login;