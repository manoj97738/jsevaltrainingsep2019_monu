const BaseController = require('../base');

class CommonController extends BaseController {
    constructor() {
        super();
    }
    errorHandler(req, res, next) {
        req.isError = true;
        req.error = "Some error"
        req.isError === true ? this.ResHand.resSend(req, res, false, this.config.errorMsg, [], 500, req.error) : next();
    }
    defaultRoute(req, res, next) {
        res.status(404).send({
            status: false,
            message: 'We dont have such API'
        })
    }
    get errorMsg() {
        return "We have a error and the Server Admin has been notified.";
    }
}
module.exports = new CommonController();