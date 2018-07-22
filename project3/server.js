var express=require("express");
// var routes = require('./routes/');
var app=express();
var bodyParser=require("body-Parser");
var mongoose=require("mongoose");
var port = 5000 || process.env.PORT
var router = express.Router()
app.use(bodyParser.json())
app.get('/api/movies', (req, res) => {
    const customers = [
      {id: 1, title: 'Nicole', genre: 'Johnson'},
      {id: 2, title: 'Nate', genre: 'Schubert'},
      {id: 3, title: 'Murial', genre: 'Anindo'},
    ];
  
    res.json(customers);
  });

  var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie"     
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});
// var url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie"
// try {
//     mongoose.connect(url, {
//     })    
// } catch (error) {
    
// }

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});