import React,{ Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.js";
import MovieCard from "./components/MovieCard/MovieCard.js";
import Thumbnail from "./components/Thumbnail/Thumbnail.js";
import Searchbar from "./components/Searchbar/Searchbar.js"
import EmailPassword from "./components/EmailPassword/EmailPassword.js";
import { MovieList, MovieItem } from "./components/MovieList";
import HomePage from './pages/Login/HomePage';
import LoginPage from './pages/Login/LoginPage';
import LoginForm from './pages/Login/LoginForm';
import API from './utils/API';
import Footer from "./components/Footer/Footer.js";
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: '',
      movies: []
    };
  }

	searchForMovie = (search) => {
		API.getMovie(search)
			.then(response => this.setState({ movies: response.data.results }))
			.catch(err => console.log(err));
	};

  onChange = (event) => {
    this.setState({ movie_id: event.target.value });
  }


  onSubmit = (event) => {
    event.preventDefault();

    this.searchForMovie(this.state.movie_id);

    this.setState({
      movie_id: ''
    });
  }

  searchMovie(movieInput){
    this.setState({
      movieInput: movieInput
    })

  }





  render() {
    console.log(this.state.movies)
    return (
         <div className="App">
         <Navbar />
        <header className="App-header">
        </header> 

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
              thumbnail={movie.poster_path}
            />;
          })}
       </div>
    

      {/* <Route path="/" exact component={HomePage}/> */}
      {/* <Route path="/login" exact component={LoginPage}/> */}

      <Footer />
      </div>
    );
  };
}
export default App;
