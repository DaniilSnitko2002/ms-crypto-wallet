import express from "express";
import { UserController } from "../controllers/user.controller";

const router = express.Router()

router.post('/get', UserController.searchUser)
router.get('/:id', UserController.getUserById)
router.post('/add', UserController.addUser)

export default router;
module.exports = router;