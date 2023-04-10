"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_connect = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../models/user.model");
const User_connect = () => {
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
    dbConfig.addModels([user_model_1.UserPOJO]);
    const db = {};
    db.Sequelize = sequelize_typescript_1.Sequelize;
    db.sequelize = dbConfig;
};
exports.User_connect = User_connect;
