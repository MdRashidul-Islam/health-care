import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../images/nav-logo.png'

import './Header.css'

const Header = () => {
  const {user, logOut}=useAuth()
  return (
    <div className="mb-5 pb-2">
      <Navbar bg="light fixed-top" expand="lg">
  <Container fluid>
    <Navbar.Brand className="fs-4 fw-bold" href="#"><img width="150px" height="50px" src={img} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0 nav-item"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <NavLink
         to="/home"
         activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        >Home
        </NavLink>

        <NavLink 
        to="/about"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>About US</NavLink>

        <NavLink 
        to="/services"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Services</NavLink>

        <NavLink 
        to="/doctors"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Doctors
        </NavLink>

        <NavLink 
        to="/department"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Department
        </NavLink>

        <NavLink 
        to="/room"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Room-Rent
        </NavLink>

        <NavLink  
        to="/contact"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Contact
        </NavLink>

        <NavLink className="login-btn"
        to="/register"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}>Sign UP
        </NavLink>

        
        { user.email && <p className="loged">Hello {user.displayName}</p>}
        {
          user.email?
          <button className='logout rounded-pill ' onClick={logOut}>Log out</button>
          :
          <NavLink
          className="login-btn" to="/login"
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>Login</NavLink>
        }
        
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Header;