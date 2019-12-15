class AppConfig {

    get port() {
        return typeof (process.env.PORT) !== 'undefined' ? process.env.PORT : 5000;
    }
    get introMsg() {
        return "We are up and running on port ";
    }
    get errorMsg() {
        return "We have a error and the Server Admin has been notified.";
    }
}
module.exports = new AppConfig();