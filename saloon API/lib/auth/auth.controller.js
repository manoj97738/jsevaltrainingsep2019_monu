const jwt = require('jsonwebtoken');
const User = require('../user/user.mongodb.schema')
const BaseController = require('../base');

class AuthController extends BaseController {
    login(req, res, next) {
        User.find({ email: req.body.email, password: req.body.password })
            .then((data) => {
                jwt.sign({ user: data }, 'myuniquekey', (err, token) => {
                    console.log(token);
                    console.log(this)
                    console.log(this.ResHand.resSend)
                    this.ResHand.resSend(req, res, true, '', data, 200, '', token);
                });

            })
            .catch((err) => {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, { sucess: false, err: err });

            })
    }
    signup() {

    }
    logout() {

    }

    isLoggedIn(req, res, next) {
        jwt.verify(req.headers['x-api-key'], 'myuniquekey',  (err, decoded)=>{
            if (decoded) {
                next();
            } else {
                this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500,  err);
            }

        });
    }

}
module.exports = new AuthController();