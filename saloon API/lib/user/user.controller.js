const BaseController = require('../base');
const User = require('./user.mongodb.schema')
class UserController extends BaseController {
    constructor() {
        super();
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    create(req, res, next) {
        const body = req.body;
        // if (body.name && body.username && body.email && body.password ) {
        //     this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, message: 'Please send all the data' });
        //     return 0;
        // }
        User.create(body)
            .then((data) => {
                this.ResHand.resSend(req, res, true, '', data, 200, '');
            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    read(req, res, next) {
        User.find({})
            .then((data) => {
                this.ResHand.resSend(req, res, true, '', data, 200, '');
            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    readOne(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((data) => {
                this.ResHand.resSend(req, res, true, '', data, 200, '');
            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    update(req, res, next) {
        User.findOne({ _id: req.params.id })
            .then((data) => {
                return User.update({ _id: req.params.id }, req.body);
            })
            .then((data) => {
                this.ResHand.resSend(req, res, true, '', data, 200, '');
            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    remove(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then((data) => {
                this.ResHand.resSend(req, res, true, '', data, 200, '');
            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }

}
module.exports = new UserController();