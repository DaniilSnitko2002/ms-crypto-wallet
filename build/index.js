"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 5000;
app.get('/api/ping', (_req, res) => {
    console.log('there was ping');
    res.send('pong');
});
app.use("api/user", user_routes_1.default);
app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
