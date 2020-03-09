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
      Add New Contest
      </li>
    </ul>
  </section>
)

export default NavBar;
