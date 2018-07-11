import axios from "axios";

module.exports = (search, cb) => {

	let api_key = '285f362a4f6cc63f443be8ae75b7438d';

    let api_url = 'https://api.themoviedb.org/3/movie/550?api_key=${api_key}&s=${search}'

    axios.get(api_url, {

		headers: {

			'content-type': 'application/json',

			'accept': 'application/json'

		}

    }).then((results) => {

    	cb(results.data)

    });

}

export default {
 
//   getMovie: function() {
//     return axios.get("/api/movies");
//   }

};