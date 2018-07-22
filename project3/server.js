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
      {id: 1, firstName: 'John', lastName: 'Doe'},
      {id: 2, firstName: 'Brad', lastName: 'Traversy'},
      {id: 3, firstName: 'Mary', lastName: 'Swanson'},
    ];
  
    res.json(customers);
  });
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie"
try {
    mongoose.connect(url, {
    })    
} catch (error) {
    
}

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});