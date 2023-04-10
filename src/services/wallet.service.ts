import { WalletDTO, UserDTO } from './../types';
import { WalletPOJO } from "../data/models/wallet.model";
import { WalletRepository } from "../data/repositories/wallet.repository";
import { newWalletDTO } from "../types";
import { v4 as uuid } from 'uuid';


export class WalletService {

    _walletRepository: WalletRepository

    constructor(){
        this._walletRepository = new WalletRepository();
    }

    async buyCoins(walletDto: newWalletDTO): Promise<string>{
        const transactionPojo = this.parseNewDtoIntoPojo(walletDto)
        const walletPromise = this._walletRepository.buyCoins(transactionPojo)
        .then(walletId => {
            return walletId
        })
        .catch(err => {
            console.error(err)
            throw err
        })
        return walletPromise;
    }

    async sellCoins(walletDto: newWalletDTO): Promise<string>{
        const transactionPojo = this.parseNewDtoIntoPojo(walletDto)
        const walletPromise = this._walletRepository.sellCoins(transactionPojo)
        .then(walletId => {
            return walletId
        })
        .catch(err => {
            console.error(err)
            throw err
        })
        return walletPromise;
    }

    async getUserCoins(userId: string): Promise<UserDTO[]>{

        const walletPromise = this._walletRepository.getUserCoins(userId)
        .then(walletTransactions => {
            if(!!walletTransactions){
                const walletTraDto = []
                walletTransactions.forEach(tran => {
                    walletTraDto.push(this.parsePojoIntoDto(tran))
                })
                return walletTraDto
            }
            return []
        })
        .catch(err => {
            console.error(err)
            throw err
        })
        return walletPromise;    
    }

    parseNewDtoIntoPojo(walletDto: newWalletDTO): WalletPOJO{
        const walletPojo: WalletPOJO = walletDto as WalletPOJO
        walletPojo.transaction_id = uuid()
        return walletPojo
    }

    parsePojoIntoDto(walletPojo: WalletPOJO): WalletDTO{
        const walletDto : WalletDTO = {
            transaction_id: walletPojo.transaction_id,
            user_id: walletPojo.user_id,
            crypto_id: walletPojo.crypto_id,
            quantity: walletPojo.quantity
        }
        return walletDto
    }

}