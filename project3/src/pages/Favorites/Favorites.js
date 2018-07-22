import React from 'react';
import {Link} from 'react-router-dom';
import MovieCard from "../../components/MovieCard/MovieCard.js";
import './style.css';


class Favorites extends React.Component {
    constructor() {
      super();
      this.state = {
        movies: []
      };
    }
  componentDidMount(){
      fetch('/api/movies')
      .then(res=>res.json())
      .then(movies=>this.setState({movies}))
  }

  render(){
      return(
        <div className="container ">
             <div class="card">
             <div class="card-image">
             <div class="col-lg-20">
             <h4>Movie Favorites</h4>
             <ul>
                 {this.state.movies.map(movie=>
                <li key={movie.id}>{movie.title}{movie.genre}</li>
                )}
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
