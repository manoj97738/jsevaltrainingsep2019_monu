const BaseController = require('../base');

class UserController extends BaseController {
    constructor() {
        super();
    }
    create(req, res, next) {
        console.log(req.body);
        res.send(req.body)
    }
    fetch(req, res, next) {
        console.log(req.body);
        res.send(req.body)
    }

}
module.exports = new UserController();