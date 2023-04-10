"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../data/repositories/user.repository");
class UserService {
    constructor() {
        this._userRepository = new user_repository_1.UserRepository();
    }
    addUser(newUser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPojo = this.parseDtoIntoNewPojo(newUser);
            const userPromise = this._userRepository.addUser(userPojo)
                .then(resUserId => {
                return resUserId;
            })
                .catch(err => {
                console.error(err);
                throw err;
            });
            return userPromise;
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPromise = this._userRepository.getUser(userId)
                .then(resUserPojo => {
                return this.parsePojoIntoDto(resUserPojo);
            })
                .catch(err => {
                console.error(err);
                throw err;
            });
            return userPromise;
        });
    }
    parseDtoIntoPojo(userDto) {
        const userPojo = userDto;
        return userPojo;
    }
    parseDtoIntoNewPojo(userDto) {
        const userPojo = userDto;
        return userPojo;
    }
    parsePojoIntoDto(userPojo) {
        const userDto = {
            user_id: userPojo.user_id,
            username: userPojo.username,
            email: userPojo.email,
            password: userPojo.password,
            birth_date: userPojo.birth_date,
            phone_number: userPojo.phone_number,
            deposit: userPojo.deposit
        };
        return userDto;
    }
}
exports.UserService = UserService;
