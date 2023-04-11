import Logger from "../looger";
import { UserService } from "../services/user.service";
import { newUserDTO } from "../types";

const userService: UserService = new UserService()

export const UserController = {

    addUser: (req: any, res: any) => {
        try {
            const newUser: newUserDTO = req.body
            userService.addUser(newUser)
            .then(resUserId => {
                res.json(resUserId)
            })
        } catch (err) {
            Logger.error(err)
            res.sendStatus(500)
        }
    },

    searchUser: (req: any, res: any) => {
        try {
            const userData = req.body

            userService.searchUser(userData)
            .then(resUser => {
                if(!!resUser){
                    res.json(resUser)
                }else{
                    res.sendStatus(404)
                }
                
            })
        } catch (err) {
            Logger.error(err)
            res.sendStatus(500)
        }
    },

    getUserById: (req: any, res: any) => {
        try {
            const userId = req.params.id

            userService.getUserByID(userId)
            .then(resUser => {
                if(!!resUser){
                    res.json(resUser)
                }else{
                    res.sendStatus(404)
                }
                
            })
        } catch (err) {
            Logger.error(err)
            res.sendStatus(500)
        }
    }
}