import React,{ Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.js";
import MovieCard from "./components/MovieCard/MovieCard.js";
import Searchbar from "./components/Searchbar/Searchbar.js"
import Thumbnail from "./components/Thumbnail/Thumbnail.js";
import EmailPassword from "./components/EmailPassword/EmailPassword.js";
import { MovieList, MovieItem } from "./components/MovieList";
import HomePage from './pages/Login/HomePage';
import LoginPage from './pages/Login/LoginPage';
import LoginForm from './pages/Login/LoginForm';
import API from './utils/API';
import Footer from "./components/Footer/Footer.js";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
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





  render() {
    
    return (
         <div className="App">
         <Navbar />
        <header className="App-header">
        </header>

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Route path="/login" exact component={LoginPage}/>
      <Route path="/MovieInfo/:movie_id" exact component={MovieInfo} />

       

      <Footer />
      </div>
    );
  };
}
export default App;
