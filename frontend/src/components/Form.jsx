import React from 'react'

const Form = () => {
    return (
        <>
            <form className='px-5' action="" method="POST">

                <div className="my-10 px-20 flex justify-between">
                    <div>
                        <label className='block' htmlFor="book_name">Book Name </label>
                        <input className='border-4 border-gray-300' type="text" name="book_name" id="book_name" placeholder='Enter book name' requiredd />
                    </div>
                    <div>
                        <label className='block' htmlFor="book_title">Book Title </label>
                        <input className='border-4 border-gray-300' type="text" name="book_name" id="book_title" placeholder='Enter book title' requiredd />
                    </div>
                    <div>
                        <label className='block' htmlFor="auther_name">Auther Name </label>
                        <input className='border-4 border-gray-300' type="text" name="auther_name" id="auther_name" placeholder='Enter Auther name' requiredd />
                    </div>
                    <div>
                        <label className='block' htmlFor="selling_price">Price </label>
                        <input className='border-4 border-gray-300' type="text" name="selling_price" id="selling_price" placeholder='Enter Auther name' requiredd />
                    </div>
                    <div>
                        <label className='block' htmlFor="publish_date">Publish Date </label>
                        <input type="date" name="publish_date" id="publish_date"  />
                    </div>
                </div>
                <div className="text-right px-20">
                    <input
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