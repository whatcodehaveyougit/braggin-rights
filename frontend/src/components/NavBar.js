import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <section id="navbar">
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
      <Link to="/add-contest">Add New Contest</Link>
      </li>
    </ul>
  </section>
)

export default NavBar;
