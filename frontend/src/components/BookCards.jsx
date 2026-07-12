import React, { useEffect, useState } from "react";
import axios from "axios";

const BookCards = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("/book/showbooks")
            .then((res) => {
                setBooks(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

   return (
    <>
        {books.map((book) => (
            <div
                key={book._id}
                className="w-72 border rounded-lg p-4 shadow"
            >
                <h2 className="text-2xl font-bold">
                    {book.bookName}
                </h2>

                <p>{book.bookTitle}</p>
                <p>{book.author}</p>
                <p>{book.publishDate}</p>
                <p>₹{book.price}</p>
            </div>
        ))}
    </>
);
};

export default BookCards;