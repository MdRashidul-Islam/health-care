import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {
  const {handleEmailChange, handlePasswordChange, handleRegister,handleNameChange, error} = useAuth();
  return (
    <div className="login-form">
    <div className="login">
      <h3 className="text-white">Register</h3>
      <form onSubmit={handleRegister}>
        <label className="d-block  text-white" htmlFor="email">Name</label>
        <input onBlur={handleNameChange} className="text-field" type="text" placeholder="Name" /> <br />
        <label className="d-block  text-white" htmlFor="email">Email</label>
        <input onBlur={handleEmailChange} className="text-field" type="email" placeholder="Email" /> <br />
        <label  className="d-block  text-white" htmlFor="Password">Password</label>
        <input onBlur={handlePasswordChange} className="text-field" type="password" placeholder="password"/><br />
        <p>{error}</p>
        <input className="submit" type="submit" value="Register" />
      </form>
      <p className=" text-white">Already have an account? <Link className="link text-warning" to="/login">Login</Link></p>
     
    </div>
  </div>
  );
};

export default Register;