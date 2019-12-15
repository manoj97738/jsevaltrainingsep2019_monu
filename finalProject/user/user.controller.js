class UserController {
    getUser(req, res) {
        res.send('Hi');
    }
}

module.exports = new UserController();