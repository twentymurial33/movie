var express=require("express");
var routes = require('./routes/');
var app=express();
var bodyParser=require("body-Parser");
var mongoose=require("mongoose");
var port = 5000 || process.env.PORT
var router = express.Router()



/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(bodyParser.json())

//app.use('/static',express.static(path.join(__dirname,'static')))
app.use('/api', routes)
var url = process.env.MONGODB_URI || "mongodb://localhost:27017/movie"
try {
    mongoose.connect(url, {
        // useNewUrlParser: true 
    })    
} catch (error) {
    
}

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});