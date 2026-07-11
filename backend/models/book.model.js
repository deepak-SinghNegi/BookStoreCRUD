import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },
    bookTitle: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    publishDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("books" , bookSchema);
export default Book;