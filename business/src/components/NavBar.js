import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '25px',
  padding: '12px 12px 12px 12px',
  margin: '20px 20px 20px 20px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',
  float: 'center',
  fontSize: '20px'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{background: 'darkgrey'}}>Business</NavLink>
      <NavLink to="/all_logs" exact style={link} activeStyle={{background: 'darkgrey'}}>CallLogs</NavLink>
      <NavLink to="/contacts" exact style={link} activeStyle={{background: 'darkgrey'}}>Contacts</NavLink>
      <NavLink to="/call" exact style={link} activeStyle={{background: 'darkgrey'}}>Video Call Room</NavLink>
    </div>
  );
};

export default NavBar;
