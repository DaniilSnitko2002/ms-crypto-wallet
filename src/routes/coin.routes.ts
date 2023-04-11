import express from "express";
import { CoinController } from "../controllers/coin.controller";

const router = express.Router()

router.get('/getAll', CoinController.getAllCoins)
router.post('/getById', CoinController.getCoinById)

export default router;
module.exports = router;