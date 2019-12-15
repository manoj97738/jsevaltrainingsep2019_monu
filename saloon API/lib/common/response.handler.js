class ResponseHandler {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @param {*} status 
     * @param {*} msg 
     * @param {*} data 
     * @param {*} httpcode 
     * @param {*} error 
     */
    resSend(req, res, status, msg, data, httpcode, error) {
        res.status(httpcode ? httpcode : 200);
        const Obj = this.senObj(status, msg, data, error)
        res.send(Obj)
    };
    /**
     * 
     * @param {*} status 
     * @param {*} msg 
     * @param {*} data 
     * @param {*} error 
     */
    senObj(status, msg, data, error) {
        return {
            status: status,
            data: data,
            error: error,
            message: msg
        }
    }
}

module.exports = new ResponseHandler();