import axios from 'axios';
import React from "react";
import { MovieList } from '../components/MovieList';
const apiKey = '285f362a4f6cc63f443be8ae75b7438d';
class API extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
		movies:undefined
	  };
	
	}
  
	componentWillMount(){

		let api_url = 'https://api.themoviedb.org/3/search/movie?api_key=${api_key}' 
	
		axios.get(api_url, {
	
		  headers: {
	
			'content-type': 'application/json',
	
			'accept': 'application/json'
	
		  }
	
		}).then((results) => {
		  this.setState({
			movies: results.data
		  })
	
		});
	
	  }
	  render(){
		const displayMovies = () => {
	
		  if(this.state.movies){
	
			return (
	
			  <div>
	
				<h5>Movie Result</h5>
	
	
			  </div>
	
			)
	
		  };
	
		}
			return (
		  <div>
			  <label>Movies</label>
<br></br>

</div>

);
}
}

export default API;

// import axios from 'axios';
// import React from 'react';
// import { MovieList } from '../components/MovieList';

// const api_Key = '285f362a4f6cc63f443be8ae75b7438d';
// class API extends React.Component{
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		movies:undefined
// 	  };
	
// 	}

// };
// 	componentWillMount(){

// 		let api_url = 'https://api.themoviedb.org/3/search/movie?api_key=${api_key}';
	
// 		axios.get(api_url, {
	
// 		  headers: {
	
// 			'content-type': 'application/json',
	
// 			'accept': 'application/json'
	
// 		  }

// 		});
	
// 		}.then((results) => {
// 		  this.setState({
// 			movies: results.data
// 		  })
	
// 		});
// 	};

// 		render(){
// 			const displayMovies = () => {
		
// 			  if(this.state.movies){
// 				return (
// 		<div>

// 			</div>
			
// 			  }

// }

// }


// export default API;

// const apiBaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

// export default {
// 	getMovie: function(search) {
// 		return axios.get(`${apiBaseUrl}&query=${search}`);
// 	  }