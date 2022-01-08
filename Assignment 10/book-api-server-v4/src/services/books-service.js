const {sequelize} = require('../data/connection');
const {Op} = require("sequelize");

//console.log('sequelize.models',sequelize.models);
const {book} =sequelize.models;

//console.log('db',db);

const getAllBooks=async()=>{
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);
    console.log("reached here 4");
    const books=await book.findAll();
    return books;
}

const getBookByIsbn=async(isbn)=>{
    
    const book1= await book.findOne({
        where:{
            isbn:isbn
        }
    });
    if(book1)
        return book1;
    else
        throw new Error('Book Not Found');
}

const addBook=async(book1)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbBook=await book.create(book1); //create and save to data base
    return dbBook;
}

const updateBook = async(isbn,book1)=>{
    const result = await deleteBook(isbn);
    const dbBook = await addBook(book1);
    return dbBook;
}

const deleteBook = async(isbn)=>{
    const result = await book.destroy({
        where:{
            isbn:isbn
        }
    });
    return result;
}

const getInPriceRange = async(min,max)=>{
    console.log(`min:${min} and max:${max}`);
    const books = await book.findAll({
        where:{
            price:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}

const getInRatingRange = async(min,max)=>{
    const books = await book.findAll({
        where:{
            rating:{
                [Op.and]:{
                    [Op.gte]:min,
                    [Op.lte]:max
                }
            }
        }
    });
    return books;
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    deleteBook,
    getInPriceRange,
    getInRatingRange
}