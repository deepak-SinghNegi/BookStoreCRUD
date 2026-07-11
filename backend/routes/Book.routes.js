import express from "express";
import {handleBookStoreController} from '../controllers/book.controller.js'
const router = express();
router.post('/addbook',handleBookStoreController);