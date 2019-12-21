
class BaseController {
    constructor(){
        this.config = require('../../config/app.config');
        this.ResHand = require('../common/response.handler');
    }
}
module.exports = BaseController;