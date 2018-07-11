import React, {Component} from 'react';

import MovieItem from './movieItem';

export default class Home extends Component {

  	render() {

	    const { imdbID, title, poster } = this.props;

	    const appendMovie = () => {

			return (

				<div>

					<a target="_blank" href={`https://www.themoviedb.org/3/search/company?page=1&api_key=%3C%3Capi_key%3E%3E`}><li>{title}</li></a>

					<a target="_blank" href={`https://www.themoviedb.org/3/search/company?page=1&api_key=%3C%3Capi_key%3E%3E`}><img src={poster} style={{height: '100px', width: '50px'}}/></a>

				</div>

			)

		}

		return (

			<div>

				{appendMovie()}

			</div>

		);

  	}

};