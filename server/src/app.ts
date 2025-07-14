import express from "express";
import dotenv from "@dotenvx/dotenvx";
import cors from "cors";
import router from "./router/router";
import { errorHandler } from "./middleware/errorHandler";


dotenv.config();

const PORT = process.env.PORT
const origin = process.env.CLIENT_URL

const app = express();

app.use(cors({
    origin,
    methods: ['GET', 'POST'],
}))

app.use(express.json());

app.use('/', router)
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});