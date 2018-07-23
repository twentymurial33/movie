import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from "../../components/MovieCard/MovieCard.js";
import './style.css';


class Favorites extends React.Component {
    constructor() {
      super();
      this.state = {
        movies: [],
        favorites: []
      };
    }
  componentDidMount(){
      fetch('/api/movies')
      .then(res=>res.json())
      .then(movies=>this.setState({movies}))

      fetch('/api/favorites').then((response) => response.json())
      .then((results) => {
          this.setState({
            favorites: results
          })
      });
  }

  render(){
      const { movies, favorites } = this.state;
      var matches = [];
      if(movies.length > 0 && favorites.length > 0){
        movies.forEach((movie) => {
          favorites.forEach((favorite) => {
            if(movie.movie_id === favorite.movie_id){
              matches.push(movie)
            }
          })
        })
      }
      return(
        <div className="container ">
             <div class="card">
             <div class="card-image">
             <div class="col-lg-20">
             <h4>Movie Favorites</h4>
             <ul>
        
                 
{
  matches.length > 0 ?
                   matches.map(movie =>
                   <li key={movie.id}>{movie.title}{movie.genre}<img src={`http://image.tmdb.org/t/p/w185//${movie.poster}`}/></li>) :
                   <li>No Favorites</li>
}

                </ul>
         </div>
      </div>
</div>
</div>  
      )
  }
  
}
// const Favorites=()=>(
// <div className="container ">
//              <div class="card">
//              <div class="card-image">
//              <div class="col-lg-20">
//              <h4>Movie Favorites</h4>
//          </div>
//       </div>
// </div>
// </div>
// )

export default Favorites;
