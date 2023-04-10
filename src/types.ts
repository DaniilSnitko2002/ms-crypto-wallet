export class UserDTO {
    user_id: string
    username: string
    email: string
    password?: string
    birth_date: Date
    phone_number: number
    deposit: number
}

export type newUserDTO = Omit<UserDTO, 'user_id'>;

export class CoinDTO {
    crypto_id: string
    crypto_name: string
    value: number
    stock: number
}

export type newCoinDTO = Omit<CoinDTO, 'crypto_id'>

export class WalletDTO{
    transaction_id: string
    user_id: string
    crypto_id: string
    quantity: number
}

export type newWalletDTO = Omit<WalletDTO, 'transaction_id'>