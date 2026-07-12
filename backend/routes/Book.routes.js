import express from "express";
import {handleBookStoreController , handleBookShowController} from '../controllers/book.controller.js'
const addbookRouter = express.Router();
addbookRouter.post('/addbook',handleBookStoreController);
addbookRouter.get('/showbooks' , handleBookShowController)

export default addbookRouter;