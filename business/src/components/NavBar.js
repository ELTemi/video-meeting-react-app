import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '10px',
  margin: '10px 20px 20px 20px',
  background: 'grey',
  textDecoration: 'none',
  color: 'white',

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
