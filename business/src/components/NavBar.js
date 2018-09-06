import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Business</NavLink>
      <NavLink to="/all_logs">CallLogs</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/call">Call</NavLink>
    </div>
  );
};

export default NavBar;
