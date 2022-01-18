import React from 'react';
import {withTitle} from '../hoc/withTitle'
import {withTimer} from '../hoc/withTimer'
let bookModule = require('../services/books.js');

const BookListScreen=({currtime})=>{
    //TODO: Initialize Here
    const books=bookModule.books;

    return (
        // <h1>Book List</h1>
        <div>
        <h3>{currtime.toLocaleTimeString()}</h3>
        <div className='BookListScreen'>
            <ul>
                {books.map(book=>(
                    <li key={book.isbn}>
                        <img src={book.cover} alt={book.title}/>
                        {book.title}
                    </li>
                ))}
            </ul>

        </div>
        </div>
    );
}

export default withTimer(withTitle(BookListScreen,"Book List"));


