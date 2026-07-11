import express from "express";
import {connectToMongoDB} from "./database.js";

const port = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
connectToMongoDB();

app.listen(port , ()=>{
    console.log(`your server is running at http://localhost:${port}/`);
    
})
