import { CoinPOJO } from "../data/models/coin.model";
import { CoinRepository } from "../data/repositories/coin.repository";
import { CoinDTO } from "../types";

export class CoinService {

    _coinRepository: CoinRepository

    constructor(){
        this._coinRepository = new CoinRepository();
    }

    async getAllCoins(): Promise<CoinDTO[]>{

        const coinPromise = this._coinRepository.getAllCoins()
        .then(resCoins => {
            const coins: CoinDTO[] = [];
            
            resCoins.forEach(coin => {
                const resCoin: CoinDTO = this.parsePojoIntoDto(coin)
                coins.push(resCoin)
            })
            return coins;
        })
        .catch(err => {
            console.error(err)
            throw err
        })

        return coinPromise;
    }

    
    async getCoinById(id: string): Promise<CoinDTO>{

        const walletPromise = this._coinRepository.getCoinById(id)
        .then(coin => {
            if(!!coin){
                return coin
            }else{
                return undefined
            }
        })
        .catch(err => {
            console.error(err)
            throw err
        })

        return walletPromise
    }


    parsePojoIntoDto(coinPojo: CoinPOJO): CoinDTO{
        const coinDto: CoinDTO = {
            crypto_id: coinPojo.crypto_id,
            crypto_name: coinPojo.crypto_name,
            value: coinPojo.value,
            stock: coinPojo.stock
        }
        return coinDto
    }

    parseDtoIntoPojo(coinDto: CoinDTO): CoinPOJO{
        const coinPojo: CoinPOJO = coinDto as CoinPOJO
        return coinPojo
    }

}