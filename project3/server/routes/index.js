var user = require('./user')
var movie = require('./movie')

module.exports = (router) => {
    user(router)
    movie(router)
}