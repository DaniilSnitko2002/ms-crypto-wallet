import { Coin_connect } from "../config/coin.db.config"
import { User_connect } from "../config/user.db.config"
import { Wallet_connect } from "../config/wallet.db.config"
import { CoinPOJO } from "../models/coin.model"
import { UserPOJO } from "../models/user.model"
import { WalletPOJO } from "../models/wallet.model"


export class WalletRepository{

    _walletDb: any = {}
    _coinDb: any = {}
    _userDb: any = {}
    _walletRepository: any
    _coinRepository: any
    _userRepository: any

    constructor(){
        this._walletDb = Wallet_connect()
        this._walletRepository = this._walletDb.sequelize.getRepository(WalletPOJO)

        this._coinDb = Coin_connect()
        this._coinRepository = this._coinDb.sequelize.getRepository(CoinPOJO)

        this._userDb = User_connect()
        this._userRepository = this._userDb.sequelize.getRepository(UserPOJO)
    }

    async buyCoins(transactionPojo: WalletPOJO): Promise<string>{
        try{        
            const coin_dbCoin = await this._coinRepository.findOne({where: {crypto_id: transactionPojo.crypto_id}})
            const newStock: number = (+coin_dbCoin.stock) - (+transactionPojo.quantity)
            if(newStock < 0){
                return "-1"
            }

            const user_dbUser = await this._userRepository.findOne({where: {user_id: transactionPojo.user_id}})
            const newDeposit: number = ((+user_dbUser.deposit) - ((+transactionPojo.quantity) * (+coin_dbCoin.value)))
            if(newDeposit < 0){
                return "-1"
            }
            
            await coin_dbCoin.update({stock: newStock})
            await user_dbUser.update({deposit: newDeposit})

            const checkTra = await this._walletRepository.findOne({where: {user_id: transactionPojo.user_id, crypto_id: transactionPojo.crypto_id}})

            if (!!checkTra){
                const newQuantity: number = (+checkTra.quantity) + (+transactionPojo.quantity)
                await checkTra.update({quantity: newQuantity})
                return `Updated transaction with id: ${checkTra.transaction_id}`
            }else{
                transactionPojo = await this._walletRepository.create(transactionPojo)
                return transactionPojo.transaction_id;
            }            

        }catch(error){
            console.log('Error while buying a cryptocoin')
            console.error(error)
            return "-1"
        }
    }

    async sellCoins (transactionPojo: WalletPOJO): Promise<string>{
        try {
            const transaction_dbTra = await this._walletRepository.findOne({where: {user_id: transactionPojo.user_id, crypto_id: transactionPojo.crypto_id}})
            const newQuantity : number = (+transaction_dbTra.quantity) - transactionPojo.quantity
            if (newQuantity < 0){
                return "-1"
            }

            const coin_dbCoin = await this._coinRepository.findOne({where: {crypto_id: transactionPojo.crypto_id}})
            const newStock: number = (+coin_dbCoin.stock) + (+transactionPojo.quantity)
            await coin_dbCoin.update({stock: newStock})

            const user_dbUser = await this._userRepository.findOne({where: {user_id: transactionPojo.user_id}})
            const newDeposit: number = (+user_dbUser.deposit) + ((+transactionPojo.quantity) * (+coin_dbCoin.value))
            await user_dbUser.update({deposit: newDeposit})

            await transaction_dbTra.update({quantity: newQuantity})

            return `Updated transaction with id: ${transaction_dbTra.transaction_id}`
            
        } catch (error) {
            console.log('Error while selling a cryptocoin')
            console.error(error)
            return "-1"
        }
    }

    async getUserCoins(userId: string): Promise<WalletPOJO[]>{
        try {
            const wallet_dbWallet = await this._walletRepository.findAll({where : {user_id: userId}})
            if(!!wallet_dbWallet){
                return wallet_dbWallet
            }else{
                return []
            }
        } catch (error) {
            console.log('Error while getting user cryptocoins')
            console.error(error)
            return []
        }

    }


}