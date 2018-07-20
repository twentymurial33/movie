var Movie = require('/models/movie');

var index=(req,res,next)=>{
	Movie.find().lean().exec((err,movies)=>res.json(
		{movies:movies.map(movie=>({
			...movie,
			
		}))}
		
	));
		}

		console.log(Movie)