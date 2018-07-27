import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => (

  <nav>
     <div class="nav-wrapper grey darken-4 border">
       <Link to="/" class="brand-logo center cyan-text text-accent-2">ChilList</Link>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li>

         <div class="row">
           <form class="col s12">

             <div class="row">
             </div>
           </form>
          </div>

         </li>

         <li><Link to="/login">Login</Link></li>
         <li><Link to="/favorites">Favorites</Link></li>
         <li><Link to="/register">Register</Link></li>
       </ul>
     </div>
   </nav>

);

export default Navbar;
