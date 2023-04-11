import { UserPOJO } from "../models/user.model";
import { User_connect } from "../config/user.db.config";
import Logger from "../../looger";

export class UserRepository{
    _database: any = {}
    _userRepository: any

    constructor(){
        this._database = User_connect();
        this._userRepository = this._database.sequelize.getRepository(UserPOJO);
    }

    async addUser(newUser: UserPOJO): Promise<string> {
        try {
            const data = await this._userRepository.findOne({where: {email: newUser.email}})
            if(!!data){
                throw 'User already exists'
            }

            newUser = await this._userRepository.create(newUser)
            return newUser.user_id;
        } catch (error) {
            Logger.error('Error generating the user')
            Logger.error(error)
            return "-1"
        }
    } 

    async searchUser(userData: {email: string, password: string}): Promise<UserPOJO | undefined> {
        try {
            const data = await this._userRepository.findOne({where: {email: userData.email, password: userData.password}})

            if(!!data){
                return data
            }else{
                return undefined
            }

        } catch (error) {
            Logger.error(error)
            return undefined
        }
    }

    async getUserById(userId: string): Promise<UserPOJO | undefined>{
        try {
            const data = await this._userRepository.findOne({where: {user_id: userId}})

            if(!!data){
                return data
            }else{
                return undefined
            }
            
        } catch (error) {
            Logger.error(error)
            return undefined
        }
    }

}