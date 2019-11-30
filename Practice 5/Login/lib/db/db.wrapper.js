class DBWrapper {
    /**
     * 
     * @param {*} model 
     * @param {*} body 
     */
    create(model, body) {
        return new Promise((resolve, reject) => {
            model.create(body, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            });
        })
    }
    /**
     * 
     * @param {*} model 
     * @param {*} query 
     * @param {*} selectedField 
     */
    findOne(model, query, selectedField) {
        return new Promise((resolve, reject) => {
            model.findOne(query, selectedField, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            });
        });
    }
    /**
     * 
     * @param {*} model 
     * @param {*} query 
     * @param {*} selectedField 
     */
    findAll(model, query, selectedField) {
        return new Promise((resolve, reject) => {
            model.find(query, selectedField, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            });
        });
    }
}
module.exports = new DBWrapper();