import express from "express";
import { WalletController } from "../controllers/wallet.controller";

const router = express.Router()

router.post('/buyCoin', WalletController.buyCoins)
router.post('/sellCoin', WalletController.sellCoins)
router.post('/getUserCoins', WalletController.getUserCoins)

export default router;
module.exports = router;