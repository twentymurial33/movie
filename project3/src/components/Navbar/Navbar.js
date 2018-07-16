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
                   <i class="material-icons prefix cyan-text text-accent-2">search</i>
                   <input  placeholder="Search" value="" id="search-bar" type="text" class="validate"/>
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
