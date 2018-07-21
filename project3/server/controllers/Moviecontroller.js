var Movie = require('./../models/Movie')
var User = require('./../models/User')
var fs = require('fs')


module.exports = {
    addMovie: (req, res, next) => {
        let { title, description } = req.body
            },
        }
        function favoriteMovie(obj) {
            new Movie(obj).save((err, movie) => {
                if (err)
                    res.send(err)
                else if (!movie)
                    res.send(400)
                next()
            })
        }
       
    getMovie: (req, res, next) => {
        Movie.findById(req.params.id)
        .populate('movie').exec((err, article)=> {
            if (err)
                res.send(err)
            else if (!movie)
                res.send(404)          
        })
    }