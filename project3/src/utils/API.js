
import axios from 'axios';
import API from './utils/API';


module.exports = (search, cb) => {

	let api_key = 'b44e5692';

    let api_url = `http://omdbapi.com?apikey=${api_key}&s=${search}`

    axios.get(api_url, {

		headers: {

			'content-type': 'application/json',

			'accept': 'application/json'

		}

    }).then((results) => {

    	cb(results.data)

    });

}

export default API;