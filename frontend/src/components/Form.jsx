import React from 'react'
import { useState  } from 'react'
import axios  from 'axios';
const Form = () => {
    const [send , setSend] = useState({
        bookName :"",
        bookTitle :"",
        author :"",
        price : "",
        publishDate :""
    });
    const changeHandler = (e)=>{
        const {name , value} = e.target;
        setSend((prev)=>({
            ...prev,
            [name] : value
        }))

    }
    const submitHandler = async(e)=>{
         e.preventDefault();
        try {
             const res = await axios.post("/book/addbook" , send);
        console.log(res.data);
        setSend({
            bookName: "",
            bookTitle: "",
            author: "",
            price: "",
            publishDate: ""
        });
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <>
            <form className='px-5' action="" method="POST">

                <div className="my-10 px-20 flex justify-between">
                    <div>
                        <label className='block' htmlFor="bookName">Book Name </label>
                        <input onChange={changeHandler} value={send.bookName} className='border-4 border-gray-300' type="text" name="bookName" id="bookName" placeholder='Enter book name' required />
                    </div>
                    <div>
                        <label className='block' htmlFor="bookTitle">Book Title </label>
                        <input onChange={changeHandler} value={send.bookTitle} className='border-4 border-gray-300' type="text" name="bookTitle" id="bookTitle" placeholder='Enter book title' required />
                    </div>
                    <div>
                        <label className='block' htmlFor="author">Author Name </label>
                        <input onChange={changeHandler} value={send.author} className='border-4 border-gray-300' type="text" name="author" id="author" placeholder='Enter Author name' required />
                    </div>
                    <div>
                        <label className='block' htmlFor="price">Price </label>
                        <input onChange={changeHandler} value={send.price} className='border-4 border-gray-300' type="number" name="price" id="price" placeholder='Enter Author name' required />
                    </div>
                    <div>
                        <label className='block' htmlFor="publishDate">Publish Date </label>
                        <input onChange={changeHandler} value={send.publishDate} type="date" name="publishDate" id="publishDate"  />
                    </div>
                </div>
                <div className="text-right px-20">
                    <input
                    onClick={submitHandler}
                        className="p-5 bg-blue-700 text-white rounded-2xl cursor-pointer"
                        type="submit"
                        value="Submit"
                    />
                </div>
            </form>
        </>
    )
}

export default Form