module.exports = {
    para1: 'soem value', // this is property
    para2: 'soem value', // this is property
    add: function () {
        return this.para1 + this.para2;
    }
}
/***
 * style two of writing the above
 *
 *
 */
module.exports = (function () {
    /**
    in this we can have more control on variable that can be exposed ad since its a 
    Scoping we are sure that no one can override our variable.
    this one also make sire we have private variabel concept
    */
    var a = 10; // provate variables
    return {
        para1: 'soem value', // this is property
        para2: 'soem value', // this is property
        add: function () {
            return a+ this.para1 + this.para2;
        }
    }
})()
/**
 * Some other way of writing
 */
function calculator() {
    return {
        para1: 'soem value', // this is property
        para2: 'soem value', // this is property
        add: function () {
            return this.para1 + this.para2;
        }
    }
}
module.exports = calculator()

/**
 * Some other way of writing
 */
function CalAsFunc() {

    this.para1 = 'soem value'; // this is property
    this.para1 = 'soem value'; // this is property
    this.add = function () {
        return this.para1 + this.para2;
    }
}
/**
 * syntatic sugar
 */
exports = new CalAsFunc();

