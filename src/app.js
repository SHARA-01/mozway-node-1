import express from "express";
import registerUser  from "./controller/contoller.js";
import DatabaseData  from "./controller/GetData.js";
import path from 'node:path'
import bodyParser from "body-parser";

import { fileURLToPath } from 'url'

const app = express();
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index', { title: 'User Register' });
});



app.get('/data', async(req, res) => {
   let data = await DatabaseData();
   if(data.ok){
    data = data.data;
   }
    res.render('DataDisplay', { title: 'Database Atlas Data',   data });
  });

app.post('/user', registerUser )

export { app };
