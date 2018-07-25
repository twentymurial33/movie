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
import Register from './pages/Register/Register';
import API from './utils/API';
import Footer from "./components/Footer/Footer.js";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import Favorites from "./pages/Favorites/Favorites"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: '',
      movies: [],
      authed: false,
    loading: true
    };
  }

  // componentDidMount () {
  //   // this.removeListener = onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         authed: true,
  //         loading: false,
  //       })
  //     else {
  //       this.setState({
  //         authed: false,
  //         loading: false
  //       })
  //     }
  //   }
  
  // // componentWillUnmount () {
  // //   this.removeListener()
  // // }

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


      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage}/>
      <Route path="/movie/:movieId" exact component={MovieInfo} />
      <Route path="/favorites" exact component={Favorites} />
      <Route path="/register" exact component={Register} />

      <Footer style={{position: 'fixed', bottom: 0}}/>
      </div>

  );
  }

}

export default App;