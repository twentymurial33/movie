import axios from 'axios';


const api_key = '285f362a4f6cc63f443be8ae75b7438d';

const apiBaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

export default {
	getMovie: function(search) {
		return axios.get(`${apiBaseUrl}&query=${search}`);
	  },

	getMovieById: function(id) {
		// return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}` + " ");
		return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`);
	},

	getPopularMovies: function(load) {
		return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}` + "&language=en-US" + "&page=1");
	},

	saveMovie: function(save) {
		return axios.post("/api/favoriteMovies", save);
	}
};


	

// import axios from 'axios';
// import React from "react";
// import { MovieList } from '../components/MovieList';
// const apiKey = '285f362a4f6cc63f443be8ae75b7438d';
// class API extends React.Component{
// 	constructor(props) {
// 	  super(props);
// 	  this.state = {
// 		movies:undefined
// 	  };
	
// 	}
  
// 	componentWillMount(){

// 		let api_url = 'https://api.themoviedb.org/3/search/movie?api_key=${api_key}' 
	
// 		axios.get(api_url, {
	
// 		  headers: {
	
// 			'content-type': 'application/json',
	
// 			'accept': 'application/json'
	
// 		  }
	
// 		}).then((results) => {
// 		  this.setState({
// 			movies: results.data
// 		  })
	
// 		});
	
// 	  }
// 	  render(){
// 		const displayMovies = () => {
	
// 		  if(this.state.movies){
	
// 			return (
	
// 			  <div>
	
// 				<h5>Movie Result</h5>
	
	
// 			  </div>
	
// 			)
	
// 		  };
	
// 		}
// 			return (
// 		  <div className="API">
// 			  <label>Movies</label>
// <br></br>

// </div>

// );
// }
// }



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


