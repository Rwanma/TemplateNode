const express = require('express');
import {DatabaseConnection} from "./Database/DatabaseConnection"

const app = express();
const port = 3001;


let msg = {type: "message",text: "Hello"};
let objJson = {"name":"John", "age":30, "car":27}


app.use(function (req: any, res: any, next: any) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/toto', (req:any, res:any) => {
        res.send("toto");
});

app.get('/', (req:any, res:any) => {
    DatabaseConnection.query("select * from EMPLOYEES", function (error, results) {
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});

