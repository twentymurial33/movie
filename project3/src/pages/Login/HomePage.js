import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import EmailPassword from "../../components/EmailPassword/EmailPassword.js";
import MovieCard from "../../components/MovieCard/MovieCard.js";
import Searchbar from "../../components/Searchbar/Searchbar.js"
import Footer from "../../components/Footer/Footer.js"
import API from '../../utils/API';

class HomePage extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.loadPopularMovies();
  }

  loadPopularMovies = (load) => {
    API.getPopularMovies(load)
    .then(response => this.setState({ movies: response.data.results }))
    .catch(err => console.log(err));
  };


  searchForMovie = (search) => {
		API.getMovie(search)
			.then(response => this.setState({ movies: response.data.results }))
			.catch(err => console.log(err));
	};

  render() {
    console.log(this.state.movies)
    return <div>
        {/* <h1>HomePage</h1> */}
        {/* <Link to="/login">Login</Link> */}
        <Searchbar
          runSearch={this.searchForMovie}
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {this.state.movies.map(movie => {
            return <MovieCard
              movieId={movie.id}
              thumbnail={movie.poster_path}
              title={movie.title}
              href={movie.href}
            />;
          })}
       </div>
    </div>
  }
}


export default withRouter(HomePage);
