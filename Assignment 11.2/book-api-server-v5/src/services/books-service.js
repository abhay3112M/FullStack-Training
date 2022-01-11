const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);


const {ResponseError,ResponseMessage} = require('../utils/http');


//console.log('db',db);
const getAllBooks=async()=>{
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);
    const {Book} =sequelize.models;
    const books=await Book.findAll();
    return books;

}

const getBookByIsbn=async(isbn)=>{
    const {Book} =sequelize.models;
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        //throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

const addBook=async(book)=>{
    const {Book} =sequelize.models;
    const dbBook=await Book.create(book); //create and save to data base
    return new ResponseMessage(dbBook,201,{location:`/api/books/${dbBook.isbn}`});
}

const getReviews=async (isbn)=>{
    const {Book} =sequelize.models;
    const {Review} =sequelize.models;
    const reviews = await Review.findAll({
        where:{
            BookIsbn:isbn
        }
    });
    return new ResponseMessage(reviews,200);
}

const addReview =async (isbn,body)=>{
    const {Book} =sequelize.models;
    const {Review} =sequelize.models;
    const dbBook=await Book.findOne({
        where:{
            isbn:isbn
        }
    }); //create and save to data base
    let review= await Review.create(body);
    const result = await dbBook.addReview(review);
    return new ResponseMessage(review,201);
}

const updateReview =async ()=>{

}

const getSingleReview=async (isbn,num)=>{
    const {Review} =sequelize.models;
    const reviews = await Review.findAll({
        where:{
            BookIsbn:isbn
        }
    });
    if(reviews.length>=num)
        return new ResponseMessage(reviews[num-1],200);
    else 
        return new ResponseError('Review Not Found',404);
}
const updateSingleReview =async (isbn,body)=>{
    
}

const deleteSingleReview = async (isbn,num)=>{
    const {Review} =sequelize.models;
    const reviews = await Review.findAll({
        where:{
            BookIsbn:isbn
        }
    });

    if(reviews.length>=num){
        var id = reviews[num-1].id;
        const review = await Review.destroy({
            where:{
                id:id
            }
        });
        return new ResponseMessage("Successfully deleted",200);
    }
    else 
        return new ResponseError('Can not be deleted due to unavailibilty ',404);
}

const getAllBooksByAuthor =async (authorid)=>{
    const {Book} =sequelize.models;
    const books = Book.findAll({
        where:{
            authorId:authorid
        }
    });
    if(books.length>0)
        return new ResponseMessage(books,200);
    else
        return new ResponseError('Not a book Found',400);
}

module.exports={
    getAllBooks,getBookByIsbn,addBook,
    getReviews,addReview,updateReview,
    getSingleReview,updateSingleReview,deleteSingleReview,
    getAllBooksByAuthor
}