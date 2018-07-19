import mongoose from "mongoose";
import Movie from "./Movie";

const movies=[{
  title:"",
  poster:"",
  genre:"",
},
{
  title:"",
  poster:"",
  genre:"",

},
{
  title:"",
  poster:"",
  genre:"",

},

{
  title:"Zoolander 2",
  poster:"",
  genre:"Comedy",

},

];

mongoose.connect("mongodb://localhost/movies");

movies.mao(data=>{
  const movie=new Movie(data);
  movie.save();
});

