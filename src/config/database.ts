import * as dontenv from 'dotenv';
import {Sequelize} from 'sequelize-typescript';

dontenv.config();
const databaseConfig = {
    connections: {
        mysql : {
            host: process.env.DB_HOST || '',
            dialect: 'mysql',
            port: process.env.DB_PORT || '',
            database: process.env.DB_DATABASE || '',
            username: process.env.DB_USERNAME || '',
            password: process.env.DB_PASSWORD || ''
        } 
    }
}
dontenv.config();
const connections = databaseConfig.connections;

let driver = {};
if (process.env.DB_CONNECTION === 'mysql') {
  driver = connections.mysql
}

Object.assign(driver, {repositoryMode: true});
Object.assign(driver, {models: [__dirname + './../models/*.model.ts']});

console.log('object created');
const sequelize =  new Sequelize(driver);

export default sequelize;