import Book from "../models/book.model.js";

export const handleBookStoreController = async (req, res) => {
    try {
        const body = req.body;

        const book = await Book.create(body);

        res.status(201).json({
            success: true,
            data: book
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
export const handleBookShowController =async (req  , res) => {
    try {
        const books = await Book.find();
    res.status(200).json({
        success : true,
        data : books,
    })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : error.message
        })
    }
}
