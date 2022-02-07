"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
class Config {
    static getDatabaseConfig() {
        const config = require('./config.json');
        return (config.database);
    }
}
exports.Config = Config;
console.log(Config.getDatabaseConfig());
//# sourceMappingURL=Config.js.map