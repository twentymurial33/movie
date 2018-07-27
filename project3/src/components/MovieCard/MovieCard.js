import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "./MovieCard.css";
import Thumbnail from "../Thumbnail";

const MovieCard = props => (

    <div class="col m3 " style={{flex: 1, flexBasis: '20%'}}>
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
          <button onClick={()=> {
            fetch(`/api/favorite`, {
              method: 'post',
              body: JSON.stringify({id: props.movieId}),
              headers: {
                  'content-type': 'application/json',
                  'accept': 'application/json'
              },
          })
          .then((response) => response.json())
          .then((results) => {
              console.log(results)
          });
          }}>Add To Favorites</button>
         </div>
         {/*<div class="card-content">
        </div>*/}
      </div>
    </div>

);

export default MovieCard;
