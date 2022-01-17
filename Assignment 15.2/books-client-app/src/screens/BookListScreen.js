import React from 'react';
let bookModule = require('../services/books.js');

const BookListScreen=({})=>{
    //TODO: Initialize Here
    const books=bookModule.books;

    return (
        <div className='BookListScreen'>
            <h1>Book List</h1>

            <ul>
                {books.map(book=>(
                    <li key={book.isbn}>
                        <img src={book.cover} alt={book.title}/>
                        {book.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default BookListScreen;


