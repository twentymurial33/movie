import React, {Component} from 'react';



const Navbar = () => (

  <nav>
     <div class="nav-wrapper">
       <a href="#" class="brand-logo center">Netflix Meets Amazon</a>
       <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li>
           <div class="row">
             <form class="col s12">
               <div class="row">
                 <div class="input-field col s6">
                   <i class="material-icons prefix">search</i>
                   <input  placeholder="Search" value="" id="search-bar" type="text" class="validate"/>
                 </div>
               </div>
             </form>
           </div>
         </li>
         <li><a href="badges.html">Login</a></li>
       </ul>
     </div>
   </nav>

);

export default Navbar;
