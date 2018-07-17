import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => (

  <nav>
     <div class="nav-wrapper grey darken-1">
       <Link to="/" class="brand-logo center cyan-text text-accent-2">Netflix Meets Amazon</Link>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li>

         <div class="row">
           <form class="col s12">

             <div class="row">
               <div class="input-field col s6">
                 <input id="search" type="text" class="validate" />
                 <label for="search">Search</label>
               </div>
             </div>
           </form>
          </div>

         </li>
         <li><Link to="/login">Login</Link></li>
       </ul>
     </div>
   </nav>

);

export default Navbar;
