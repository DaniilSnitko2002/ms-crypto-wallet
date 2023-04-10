"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
exports.UserController = {
    addUser: (req, res) => {
        try {
            const newUser = req.body;
            userService.addUser(newUser)
                .then(resUserId => {
                res.json(resUserId);
            });
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    },
    getUser: (req, res) => {
        try {
            const userId = req.params.id;
            userService.getUser(userId)
                .then(resUserId => {
                res.json(resUserId);
            });
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
};
