import React, {Component} from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => (

  <footer class="page-footer grey darken-1 ">

         <div class="container ">
           <div class="row">

             <div class="col l6 s12">
               <h5 class="cyan-text text-accent-2">Netflix Meets Amazon</h5>
               <p class="cyan-text text-accent-2">Search Movies. Find Your Favorites. Chill.</p>
             </div>
             <div class="col l4 offset-l2 s12">
               <ul>
                 <li><Link to="/" class="cyan-text text-accent-2">Home</Link></li>
                 <li><Link to="/login" class="cyan-text text-accent-2">Login</Link></li>
                 <li><Link to="/favorites" class="cyan-text text-accent-2">Favorites</Link></li>
               </ul>
             </div>
           </div>
         </div>
         <div class="footer-copyright">
           <div class="container cyan-text text-accent-2">
           © 2018 Copyright Murial + Nicole + Nate
           </div>
         </div>
       </footer>
);

export default Footer;
