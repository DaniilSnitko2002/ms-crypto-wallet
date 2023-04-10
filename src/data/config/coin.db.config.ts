import { Sequelize } from "sequelize-typescript"
import { CoinPOJO } from "../models/coin.model"

export const Coin_connect = () => {
    const DB_HOSTNAME = 'localhost'
    const DB_PORT = 5432
    const DB_NAME = 'postgres'
    const DB_USERNAME = 'postgres'
    const DB_PASWWORD = 'postgres'
    const DB_SQUEMA = 'hackaton'
    const DB_DIALECT: any = 'postgres'
    
    const dbConfig = new Sequelize(DB_NAME, DB_USERNAME, DB_PASWWORD, 
        {
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
        })

    dbConfig.addModels([CoinPOJO]);

    const db : any = {}

    db.Sequelize = Sequelize
    db.sequelize = dbConfig

    return db
}