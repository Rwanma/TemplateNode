

export class Config {

    static getDatabaseConfig() {
        const config = require('./config.json');
        return(config.database);
    }


}



console.log(Config.getDatabaseConfig());
