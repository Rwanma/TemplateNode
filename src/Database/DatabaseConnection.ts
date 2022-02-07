let mysql = require('mysql');
let SqlString = require('sqlstring');
import {Config} from "../Config/Config";


export class DatabaseConnection {

    static getConnection() {
        let databaseConfig = Config.getDatabaseConfig();
        return mysql.createConnection({
            host: databaseConfig.host,
            user: databaseConfig.user,
            password: databaseConfig.password,
            database: databaseConfig.name
        });
    }

    static query(query : string, callback : (error: any, results : any) => void) {
        //logger.log('******************** New Query ********************');
        console.log('DatabaseConnection query : ' + query);
        let dbConnection = DatabaseConnection.getConnection();
        dbConnection.query(query, function (error : any, results : any) {
            let returnQuery = results;
            if (error) {
                console.log('Query FAILED --- ' + query + ' --- ERROR : ' + error);
                returnQuery = null;
            }else{
                console.log('Query SUCCESS : ' + query);
            }
            //logger.log('******************** End Query ********************');
            dbConnection.end();
            callback(error, results);
        });
    }
}




/*
let query = 'select * from CATEGORIES';
let myConnection = new DatabaseConnection();
*/


/*DatabaseConnection.query("select * from CATEGORIES", function (error, results) {
    console.log(results);
});*/

