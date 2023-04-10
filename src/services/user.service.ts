import { UserPOJO } from "../data/models/user.model";
import { UserRepository } from "../data/repositories/user.repository";
import { newUserDTO, UserDTO } from "../types";
import { v4 as uuid } from 'uuid';

export class UserService {
    _userRepository: UserRepository

    constructor(){
        this._userRepository = new UserRepository();
    }

    async addUser(newUser: newUserDTO): Promise<string>{
        const userPojo = this.parseNewDtoIntoPojo(newUser)

        const userPromise = await this._userRepository.addUser(userPojo)
        .then(resUserId => {
            return resUserId
        })
        .catch(err => {
            console.error(err)
            throw err
        })
        return userPromise
    }

    async searchUser(userData: {email: string, password: string}): Promise<UserDTO | undefined>{
        const userPromise = await this._userRepository.searchUser(userData)
        .then(resUserPojo => {
            if(!!resUserPojo){
                return this.parsePojoIntoDto(resUserPojo)
            }
            return undefined
        })
        .catch(err => {
            console.error(err)
            throw err
        })

        return userPromise
    }

    async getUserByID(userId: string): Promise<UserDTO | undefined>{
        const userPromise = await this._userRepository.getUserById(userId)
        .then(resUserPojo => {
            if(!!resUserPojo){
                return this.parsePojoIntoDto(resUserPojo)
            }
            return undefined
        })
        .catch(err => {
            console.error(err)
            throw err
        })

        return userPromise
    }

    parseDtoIntoPojo(userDto: UserDTO): UserPOJO{
        const userPojo = userDto as UserPOJO
        return userPojo
    }

    parseNewDtoIntoPojo(userDto: newUserDTO): UserPOJO{
        const userPojo = userDto as UserPOJO
        userPojo.user_id = uuid()
        return userPojo
    }

    parsePojoIntoDto(userPojo: UserPOJO): UserDTO{
        const userDto: UserDTO = {
            user_id: userPojo.user_id,
            username: userPojo.username,
            email: userPojo.email,
            birth_date: userPojo.birth_date,
            phone_number: userPojo.phone_number,
            deposit: userPojo.deposit
        }
        return userDto
    }
}