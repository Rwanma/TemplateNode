import {DatabaseConnection} from "./DatabaseConnection"


export class PromiseGetData {

    promiseGetData(){
        DatabaseConnection.query("select * from EMPLOYEES", function (error, results) {
            console.log(results);
        });
    }
}


//let myConnection = new DatabaseConnection();


