"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin_connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const coin_model_1 = require("../models/coin.model");
const Coin_connect = () => {
    const DB_HOSTNAME = 'localhost';
    const DB_PORT = 5432;
    const DB_NAME = 'postgres';
    const DB_USERNAME = 'postgres';
    const DB_PASWWORD = 'postgres';
    const DB_SQUEMA = 'hackaton';
    const DB_DIALECT = 'postgres';
    const dbConfig = new sequelize_typescript_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASWWORD, {
        dialect: DB_DIALECT,
        schema: DB_SQUEMA,
        port: DB_PORT,
        host: DB_HOSTNAME,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });
    dbConfig.addModels([coin_model_1.CoinPOJO]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = dbConfig;
};
exports.Coin_connect = Coin_connect;
