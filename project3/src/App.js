import React,{ Component } from 'react';
import movieList from './components/movieList';
import movieItem from './components/movieItem';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from './pages/Login/HomePage';
import LoginPage from './pages/Login/LoginPage';
// import API from './utils/API/';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_id: '',
      searchResults: undefined,
      
      moives: []
    };
  }

  onChange = (event) => {
    this.setState({ movie_id: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      movie_id: ''
      
    });
  }

  searchMovie(movieInput){
    this.setState({
      movieInput: movieInput
    })

    // API(movieInput, (res) => {
    //   if(res.Search){
    //     this.setState({
    //       searchResults: res.Search

    //     })

    //   }

    // });

  }

  render() {
    return (
         <div className="App">

        <header className="App-header">
        <h1 className="App-title">Netflix meets Amazon</h1>
        </header>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.movie_id} onChange={this.onChange} />
          <button>Submit</button>
        </form>

        <movieList items={this.state.items} />

      </div>
    );
  }
}


export default App;
