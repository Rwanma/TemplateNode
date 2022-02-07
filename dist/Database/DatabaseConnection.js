"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
let mysql = require('mysql');
let SqlString = require('sqlstring');
const Config_1 = require("../Config/Config");
class DatabaseConnection {
    static getConnection() {
        let databaseConfig = Config_1.Config.getDatabaseConfig();
        return mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,
            database: databaseConfig.name
        });
    }
    static query(query, callback) {
        //logger.log('******************** New Query ********************');
        console.log('DatabaseConnection query : ' + query);
        let dbConnection = DatabaseConnection.getConnection();
        dbConnection.query(query, function (error, results) {
            let returnQuery = results;
            if (error) {
                console.log('Query FAILED --- ' + query + ' --- ERROR : ' + error);
                returnQuery = null;
            }
            else {
                console.log('Query SUCCESS : ' + query);
            }
            //logger.log('******************** End Query ********************');
            dbConnection.end();
            callback(error, results);
        });
    }
}
exports.DatabaseConnection = DatabaseConnection;
/*
let query = 'select * from CATEGORIES';
let myConnection = new DatabaseConnection();
*/
/*DatabaseConnection.query("select * from CATEGORIES", function (error, results) {
    console.log(results);
});*/
//# sourceMappingURL=DatabaseConnection.js.map