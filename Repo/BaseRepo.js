"use strict";
exports.__esModule = true;
var BaseRepository = /** @class */ (function () {
    function BaseRepository() {
    }
    BaseRepository.prototype.add = function (t) {
        throw new Error("Method not implemented.");
    };
    BaseRepository.prototype.update = function (t) {
        throw new Error("Method not implemented.");
    };
    BaseRepository.prototype["delete"] = function (id) {
        throw new Error("Method not implemented.");
    };
    BaseRepository.prototype.findAll = function () {
        throw new Error("Method not implemented.");
    };
    BaseRepository.prototype.findById = function (id) {
        throw new Error("Method not implemented.");
    };
    return BaseRepository;
}());
exports.BaseRepository = BaseRepository;
