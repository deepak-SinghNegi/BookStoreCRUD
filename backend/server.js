import express from "express";
import dotenv from "dotenv";
import {connectToMongoDB} from "./database.js";
import addbookRouter from "./routes/book.routes.js"
const port = 3000;
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
connectToMongoDB();
app.get('/',(req , res)=>{
    res.send(`<h1>hello world</h1>`)
});
app.use('/book' , addbookRouter);
app.listen(port , ()=>{
    console.log(`your server is running at http://localhost:${port}/`);
    
})
