import Movie from "./models/movie";
import moment from "moment";

// const days=["Today"];

// const times=[];

export const index=(req,res,next)=>{
	Movie.find().lean().exec((err,movies)=>res.json(
		{movies:movies.map(movie=>({
			...movie,
			// days,
			// times,
		}))}
		
	));
		}