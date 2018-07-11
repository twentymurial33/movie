import React,{ Component } from 'react';
import movieList from './components/movieList';
import movieItem from './components/movieItem';
// import API from './utils/API/';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieInput: '',
      searchResults: undefined,
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
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
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
  
        <movieList items={this.state.items} />
        
      </div>
    );
  }
}


export default App;

