import React,{ Component } from 'react';
import {Route} from 'react-router-dom';
import movieList from './components/movieList';
// import movieItem from './components/movieItem';
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import MovieCard from "./components/MovieCard/MovieCard.js";
import HomePage from './pages/Login/HomePage';
import LoginPage from './pages/Login/LoginPage';
import LoginForm from './pages/Login/LoginForm';
import API from './utils/API';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: '',
      moives: []
    };
  }


	searchForMovie = (search) => {
		API.getMovie(search)
			.then(response => this.setState({ movies: response.data }))
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
    return (
         <div className="App">
         <Navbar />
        <header className="App-header">
        <h1 className="App-title">Netflix meets Amazon</h1>
        </header>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.movie_id} onChange={this.onChange} />
          <button>Submit</button>
        </form>

        <MovieCard />


        <movieList items={this.state.items} />
        <Route path="/" exact component={HomePage}/>
      <Route path="/login" exact component={LoginPage}/>

      </div>
    );
  };
}


export default App;
