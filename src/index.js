import "dotenv/config.js";
import server from "../database/index.js";
import { app } from "./app.js";

server();

app.listen(process.env.PORT, ()=> console.log(`Server is running on port : ${process.env.PORT}`))
