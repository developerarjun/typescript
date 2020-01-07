"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BaseRepo_1 = require("../Repo/BaseRepo");
var RepoImpl = /** @class */ (function (_super) {
    __extends(RepoImpl, _super);
    function RepoImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepoImpl.prototype.add = function (t) {
        console.log(t.getId());
        console.log(t.getFirstName());
        console.log(t.getLastName());
    };
    RepoImpl.prototype.update = function (t) {
        console.log("Inside update");
    };
    RepoImpl.prototype["delete"] = function (id) {
        return true;
    };
    RepoImpl.prototype.findAll = function () {
        console.log("Inside findall");
        return null;
    };
    RepoImpl.prototype.findById = function (id) {
        console.log("Inside findbyid");
        return null;
    };
    return RepoImpl;
}(BaseRepo_1.BaseRepository));
exports.RepoImpl = RepoImpl;
