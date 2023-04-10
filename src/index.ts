import cors from "cors";
import express from "express";
import userRouter from "./routes/user.routes"
import coinRouter from "./routes/coin.routes"
import walletRouter from "./routes/wallet.routes"


const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:4200']
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

const PORT = 5000;

app.use("/api/user", userRouter)
app.use("/api/coin", coinRouter)
app.use("/api/action", walletRouter)

app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));