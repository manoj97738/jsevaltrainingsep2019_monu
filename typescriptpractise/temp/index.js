"use strict";
var variabelname;
variabelname = '100';
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + "..";
var list = [1, 2, 3];
var lists = ["Dasd", "asdad"];
var listO = [
    { age: "dasd", name: "asdsa" },
    { age: "dasd", name: "asdsa" }
];
var User = (function () {
    function User() {
        this.name = "sd";
        this.name2 = "sd";
        this.name4 = "sd";
        this.name3 = "sd";
    }
    User.prototype.getStr = function (p1, p2) {
        this.getNu();
        return p1 + p1;
    };
    User.prototype.getNu = function () {
    };
    return User;
}());
var u1 = new User();
u1.getNu();
u1.getStr("asd", "ASd");
