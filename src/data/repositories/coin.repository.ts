import Logger from "../../looger";
import { Coin_connect } from "../config/coin.db.config";
import { CoinPOJO } from "../models/coin.model";


export class CoinRepository{
    
    _database: any = {};
    _coinRepository: any;

    constructor(){
        this._database = Coin_connect();
        this._coinRepository = this._database.sequelize.getRepository(CoinPOJO)
    }

    async getAllCoins(): Promise<CoinPOJO[]>{
        try{
            const allCoins = await this._coinRepository.findAll()            
            return allCoins
            
        }catch(error){
            Logger.error('Error trying to get the cryptocoins')
            Logger.error(error)
            return []
        }
    }

    async getCoinById(id: string): Promise<CoinPOJO | undefined>{
        try {
            const coin = await this._coinRepository.findByPk(id)

            if(!!coin){
                return coin
            }else{
                return undefined
            }

        } catch (error) {
            Logger.error('Error trying to get the cryptocoin')
            Logger.error(error)
            return undefined
        }
    }

}