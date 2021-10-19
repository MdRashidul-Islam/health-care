import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
const {signWithGoogle, handleEmailChange, handlePasswordChange, handleEmailLog, setIsLoading } = useAuth();
const location= useLocation();
const history= useHistory();
const redirect_url= location.state?.from || '/home'

const hadleGoogle=()=>{
  signWithGoogle()
  .then((result) => {
    history.push(redirect_url)
  })
  .finally(()=> setIsLoading(false));
}
 
  return (
    <div className="login-form">
      <div className="login">
        <h3 className="text-white">Login</h3>
        <form onSubmit={handleEmailLog}>
          <label className="d-block  text-white" htmlFor="email">Email</label>
          <input onBlur={handleEmailChange} className="text-field" type="email" placeholder="Email" /> <br />
          <label  className="d-block  text-white" htmlFor="Password">Password</label>
          <input onBlur={handlePasswordChange} className="text-field" type="password" placeholder="password"/><br />
          <input className="submit" type="submit" value="Login" />
        </form>
        <p className=" text-white">New to Health-Care? <Link className="link text-warning" to="/register"> Create account</Link></p>
        <button className="log-btn" onClick={hadleGoogle}>continue with google</button>
      </div>
    </div>
  );
};

export default Login;