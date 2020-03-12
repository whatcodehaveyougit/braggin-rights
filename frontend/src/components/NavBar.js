import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <section id="navbar">
    <h1 className="title-text"><a className="main-title" href="http://localhost:3000/">Braggin' Rights</a></h1>
    {/* <ul class>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/add-contest">Add New Contest</Link>
      </li>
    </ul> */}
  </section>
)



export default NavBar;
