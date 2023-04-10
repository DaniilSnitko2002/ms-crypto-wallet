import {Table, Column, Model} from 'sequelize-typescript'
import {INTEGER, STRING } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'crypto_coins',
    schema: 'hackaton',
    updatedAt: false,
    createdAt: false
})
export class CoinPOJO extends Model{

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'crypto_id'
    })
    crypto_id: string

    @Column({
        type: STRING,
        field: 'crypto_name'
    })
    crypto_name: string

    @Column({
        type: INTEGER,
        field: 'value'
    })
    value: number

    @Column({
        type: INTEGER,
        field: 'stock'
    })
    stock: number
}