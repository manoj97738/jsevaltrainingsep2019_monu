const UserModel = require('./user.model');
const DBWrapper = require('../db/db.wrapper');
class UserController {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    create(req, res, next) {
        DBWrapper.create(UserModel, req.body)
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                next(err)
            })
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    findAll(req, res, next) {
        DBWrapper.findAll(UserModel, {}, { name: 1, email: 1, _id: 0 })
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                next(err)
            })
    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    readOne(req, res, next) {

    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    update(req, res, next) {

    }
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    del(req, res, next) {

    }
}
module.exports = new UserController();