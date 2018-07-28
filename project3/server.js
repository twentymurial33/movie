var express=require("express");
// var routes = require('./routes/');
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var request = require('request');
var path = require('path');

var port = process.env.PORT || 5000
var router = express.Router();

var Favorite = require("./server/models/Favorite.js");
var Movie = require("./server/models/movie.js");

// var url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie" 
// var MongoClient=require("mongodb").MongoClient;
var MONGODB_URI="mongodb://Test4:test1984@ds257981.mlab.com:57981/heroku_plrrf1j6";
// var MONGODB_URL="mongodb://test1:Murial22@ds119660.mlab.com:19660/movie";



mongoose.connect(MONGODB_URI, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
  }
});

app.use(bodyParser.json())

app.get('/api/movies', (req, res) => {
  Movie.find().then(movies => res.json(movies))
});

app.get("/api/favorites", (req, res) => {
  Favorite.find().then(favorites => res.json(favorites))
})

app.get("/api/getPopularMovies", (req, res) => {
  Movie.collection.drop;
  request(`https://api.themoviedb.org/3/movie/now_playing?api_key=285f362a4f6cc63f443be8ae75b7438d` + "&language=en-US" + "&page=1", function(err, response, html){
    var popMovies = JSON.parse(response.body).results;
    popMovies.forEach((popMovie) => {
      Movie.insertMany([{
        title: popMovie.title,
        movie_id: popMovie.id,
        poster: popMovie.poster_path
      }])
    })
    res.json("Movies Dropped and Added")
  })
})

app.post('/api/favorite', (req, res) => {
  Favorite.create(req.body).then((newFav) => {
    
    res.json(newFav)
  })
})

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, "./build/index.html"));
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("project3/build"));
//  } else {
//   app.use(express.static("public"));
//  }

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});