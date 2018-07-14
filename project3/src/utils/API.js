
import axios from 'axios';


const api_key = '285f362a4f6cc63f443be8ae75b7438d';

const apiBaseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}`;

// module.exports = (search, cb) => {

export default {
	getMovie: function(search) {
		return axios.get(`${apiBaseUrl}&s=${search}`);
	  }

    // axios.get(api_url, {

	// 	headers: {

	// 		'content-type': 'application/json',

	// 		'accept': 'application/json'

	// 	}

    // }).then((results) => {

    // 	cb(results.data)

    // });

};

// export default API;