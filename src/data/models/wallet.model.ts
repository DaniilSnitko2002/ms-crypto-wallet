import {Table, Column, Model} from 'sequelize-typescript'
import {INTEGER, STRING, DATE } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'wallet',
    schema: 'hackaton'
})
export class WalletPOJO extends Model{

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'transaction_id'
    })
    transaction_id: string

    @Column({
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        type: INTEGER,
        field: 'quantity'
    })
    quantity: number

    @Column({
        type: DATE,
        field: 'createdAt'
    })
    createdAt: Date

    @Column({
        type: DATE,
        field: 'updatedAt'
    })
    updatedAt: Date
}