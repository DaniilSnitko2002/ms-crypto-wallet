import {Table, Column, Model} from 'sequelize-typescript'
import {INTEGER, STRING, DATE } from "sequelize";

@Table({
    freezeTableName: true,
    tableName: 'users',
    schema: 'hackaton'
})
export class UserPOJO extends Model{

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'user_id'
    })
    user_id: string

    @Column({
        type: STRING,
        field: 'username'
    })
    username: string

    @Column({
        type: STRING,
        field: 'email'
    })
    email: string

    @Column({
        type: STRING,
        field: 'password'
    })
    password: string

    @Column({
        type: DATE,
        field: 'birth_date'
    })
    birth_date: Date

    @Column({
        type: INTEGER,
        field: 'phone_number'
    })
    phone_number: number

    @Column({
        type: INTEGER,
        field: 'deposit'
    })
    deposit: number

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