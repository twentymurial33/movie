import React from "react";
import Thumbnail from "../Thumbnail";
import MovieCard from "../MovieCard";



export const MovieItem = props => {
  const {
    title,
    href,
    thumbnail,
    ingredients
  } = props;

  return <li className="list-group-item">
    <MovieCard>
          <Thumbnail src={thumbnail} />
          <h3>{title}</h3>
          <p>
            Summary: {ingredients}
          </p>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href={href}
          >
            Go to Movie!
          </a>
     
    </MovieCard>
  </li>;
}





// import React, {Component} from 'react';
// import movieList from './movieList';



// export default class movieItem extends Component {

//   	render() {

// 	    const { imdbID, title, poster } = this.props;

// 	    const appendMovie = () => {

// 			return (

// 				<div>

// 					<a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}><li>{title}</li></a>

// 					<a target="_blank" href={`https://www.imdb.com/title/${imdbID}`}><img src={poster} style={{height: '100px', width: '50px'}}/></a>

// 				</div>

// 			)

// 		}

// 		return (

// 			<div>

// 				{appendMovie()}

// 			</div>

// 		);

//   	}

// };