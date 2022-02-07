"use strict";
exports.__esModule = true;
exports.Config = void 0;
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.getDatabaseConfig = function () {
        var config = require('../Config/config.json');
        return (config.database);
    };
    return Config;
}());
exports.Config = Config;
console.log(Config.getDatabaseConfig());
