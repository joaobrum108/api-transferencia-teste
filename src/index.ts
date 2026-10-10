import express from "express";
import router from "./router.ts"
import dotenv from "dotenv"

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(router)

app.listen(PORT , ()=> {
    console.log(`servidor rodando na PORT tal : ${PORT} `)
})