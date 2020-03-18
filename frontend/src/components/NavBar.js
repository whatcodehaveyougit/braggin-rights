import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => (
  <section id="navbar">
    <h1 className="site-title"><a className="site-title" href="http://localhost:3000/">Braggin' Rights</a></h1>
    
    <div>
      <a href="http://localhost:3000/add-contest" className="add-contest">Add New Contest</a>      
    </div>
  </section>
)



export default NavBar;
