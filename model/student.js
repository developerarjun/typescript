"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getFirstName = function () {
        return this.firstName;
    };
    Student.prototype.getLastName = function () {
        return this.lastName;
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    Student.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Student.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Student.prototype.setId = function (id) {
        this.id = id;
    };
    return Student;
}());
exports.Student = Student;
