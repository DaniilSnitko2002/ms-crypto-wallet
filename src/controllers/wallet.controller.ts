import { WalletService } from "../services/wallet.service"
import { newWalletDTO } from "../types"

const walletService: WalletService = new WalletService()

export const WalletController = {

    buyCoins: (req: any, res: any) => {
        try {            
            const data: newWalletDTO = req.body
            walletService.buyCoins(data)
            .then(coinId => {
                res.json(coinId)
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },
    sellCoins: (req: any, res: any) => {
        try {            
            const data: newWalletDTO = req.body
            walletService.sellCoins(data)
            .then(coinId => {
                res.json(coinId)
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    },

    getUserCoins: (req: any, res: any) => {
        try {
            const userId = req.body
            walletService.getUserCoins(userId)
            .then(userCoins => {
                res.json(userCoins)
            })
        } catch (err) {
            console.log(err)
            res.sendStatus(500)
        }
    }
}