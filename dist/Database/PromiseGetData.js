"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseGetData = void 0;
const DatabaseConnection_1 = require("./DatabaseConnection");
class PromiseGetData {
    promiseGetData() {
        DatabaseConnection_1.DatabaseConnection.query("select * from EMPLOYEES", function (error, results) {
            console.log(results);
        });
    }
}
exports.PromiseGetData = PromiseGetData;
//let myConnection = new DatabaseConnection();
//# sourceMappingURL=PromiseGetData.js.map