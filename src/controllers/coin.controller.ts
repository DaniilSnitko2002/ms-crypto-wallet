import { CoinService } from "../services/coin.service";

const coinService: CoinService = new CoinService()

export const CoinController = {

    getAllCoins: (_req: any, res: any) => {
        try {            
            coinService.getAllCoins()
            .then(resCoins => {
                res.json(resCoins)
            })
            .catch(err => {
                console.error(err)
                res.sendStatus(500)
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    getCoinById: (req: any, res: any) => {
        try {
            const COIN_ID: string = req.params.id

            coinService.getCoinById(COIN_ID)
            .then(resCoin => {
                if(!!resCoin){
                    return res.json(resCoin)
                }else{
                    return res.sendStatus(404)
                }
            })            

        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }

}