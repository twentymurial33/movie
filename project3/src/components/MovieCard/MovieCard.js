import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./MovieCard.css";
import Thumbnail from "../Thumbnail";

const MovieCard = props => (
  
    <div class="col m3" style={{flex: 1, flexBasis: '20%'}}>
      <div class="card">
        <div class="card-image">
        <Thumbnail src={props.thumbnail} />
          <h3>{props.title}</h3>
          <a
            rel="noreferrer noopener"
            target="_blank "
            
            href={props.href}
          >
          </a>

          <Link to={`/movie/${props.movieId}`}>More Info!</Link>
         </div>
         <div class="card-content">
        </div>
      </div>
    </div>

);

export default MovieCard;
