import React,{ Component } from 'react';
import {Route} from 'react-router-dom';
import movieList from './components/movieList';
// import movieItem from './components/movieItem';
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
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

  componentDidMount() {
		this.loadMovie();
	}

	loadMovie = () => {
		API.getMovie()
			.then(response => this.setState({ movies: response.data }))
			.catch(err => console.log(err));
	};

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


    // API.getMoive(id)
    // .then(res => {
    //   this.setState({
    //     movie_id: ""
    //   })
    //   this.loadMoives()
    // })
    // .catch(e => {
    //   console.log(e);
    // })
}

    // API(movieInput, (res) => {
    //   if(res.Search){
    //     this.setState({
    //       searchResults: res.Search

    //     })

    //   }

    // });

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
        <Route path="/" exact component={HomePage}/>
  <Route path="/login" exact component={LoginPage}/>
      </div>
    );
  }
}


export default App;
