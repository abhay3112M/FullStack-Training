const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);


const {ResponseError,ResponseMessage} = require('../utils/http');


//console.log('db',db);
const getAllBooks=async()=>{
    const {Book} =sequelize.models;
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll({});//attributes:['isbn','title','author','price','rating','cover']
    return books;

}

const getBookByIsbn=async(args)=>{

    const {Book} =sequelize.models;
    const book= await Book.findOne({where:{isbn:args.isbn}});
    if(book)
        return book;
    else
        //throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

const addBook=async({book})=>{
    const {Book} =sequelize.models;
    const dbBook=await Book.create(book); //create and save to data base
    return new ResponseMessage(dbBook,201,{location:`/api/books/${dbBook.isbn}`});
}

const updateBookByIsbn=async({model,isbn})=>{

    // console.log("args",args);
    
    const {Book} = sequelize.models;
   
    // console.log("isbn",isbn)
    
    const book= await Book.update(model, {where:{isbn:isbn}});
    console.log(book)
    if(book)
        return book;
    else
        // throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}


const deleteBookByIsbn = async({isbn})=>{
    const {Book} =sequelize.models;
    const book = await Book.destroy({where:{isbn:isbn}});
    if(book)
        return book;
    else
        // throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBookByIsbn,
    deleteBookByIsbn
}