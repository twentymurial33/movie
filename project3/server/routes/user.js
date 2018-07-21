var Usercontroller = require('./../controllers/Usercontroller')

module.exports = (router) => {
    router
        .route('/user/:id')
        // .get(Usercontroller.getUser)

    router
        .route('/user/profile/:id')
        // .get(Usercontroller.getUserProfile)

    router
        .route('/user')
        .post(Usercontroller.addUser)
   
}