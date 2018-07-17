import React, {Component} from 'react';
import "./MovieCard.css";
import Thumbnail from "../Thumbnail";

const MovieCard = props => (

  <div class="row">
    <div class="col m3">
      <div class="card">
        <div class="card-image">
        <Thumbnail src={props.thumbnail} />
          <h3>{props.title}</h3>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.href}
          >
            Go to Movie!
          </a>
          {/* <img src="images/sample-1.jpg" /> */}
          {/* <span class="card-title">Card Title</span> */}
         </div>
         <div class="card-content">
        </div>
      </div>
    </div>
    <div class="col m3">
      <div class="card">
        <div class="card-image">
          {/* <img src="images/sample-1.jpg" /> */}
          {/* <span class="card-title">Card Title</span> */}
         </div>
         <div class="card-content">
        </div>
      </div>
    </div>
    <div class="col m3">
      <div class="card">
        <div class="card-image">
          {/* <img src="images/sample-1.jpg" /> */}
          {/* <span class="card-title">Card Title</span> */}
         </div>
         <div class="card-content">
        </div>
      </div>
    </div>
    <div class="col m3">
      <div class="card">
        <div class="card-image">
          {/* <img src="images/sample-1.jpg" /> */}
          {/* <span class="card-title">Card Title</span> */}
         </div>
         <div class="card-content">
        </div>
      </div>
    </div>
    </div>
    

);

export default MovieCard;
