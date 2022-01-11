const service=require('../services/books-service');
const {ResponseError,ResponseMessage}=require('../utils/http');

const getAllBooks=async (request,response)=>{
    try{
        const books=await service.getAllBooks();
        response.json(books);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const getBookByIsbn=async(request,response)=>{
    try{
        const book=await service.getBookByIsbn(request.params.isbn);
        response.json(book);
    }catch(error){
        //response.status(404).json({message:error.message, isbn:request.params.isbn});
        ResponseError.fromError(error).send(response);
    }
}

const addBook=async (request, response, next) => {
    try{
        const book=await service.addBook(request.body);
        //response.status(201).send(book);
        ResponseMessage.fromData(book).send(request,response);
    } catch(error){
        console.log('error',error);
        //response.status(400).json({message: error.message});
        ResponseError.fromError(error).send(response);
    }
}

const getReviews=async (request,response)=>{
    try{
        const reviews = await service.getReviews(request.params.isbn);
        ResponseMessage.fromData(reviews).send(request,response);
    }catch(error){
        //response.status(404).json({message:error.message, isbn:request.params.isbn});
        ResponseError.fromError(error).send(response);
    }
}

const addReview =async (request,response)=>{
    try{
        const review = await service.addReview(request.params.isbn,request.body);
        ResponseMessage.fromData(review).send(request,response);
    }catch(error){
        //response.status(404).json({message:error.message, isbn:request.params.isbn});
        ResponseError.fromError(error).send(response);
    }
}

const updateReview =async (request,response)=>{

}

const getSingleReview=async (request,response)=>{
    try{
        const review = await service.getSingleReview(request.params.isbn,request.params.num);
        ResponseMessage.fromData(review).send(request,response);
    }catch(error){
        //response.status(404).json({message:error.message, isbn:request.params.isbn});
        ResponseError.fromError(error).send(response);
    }
}

const updateSingleReview =async (request,response)=>{

}

const deleteSingleReview = async (request,response)=>{
    try{
        const review = await service.deleteSingleReview(request.params.isbn,request.params.num);
        ResponseMessage.fromData(review).send(request,response);
    }catch(error){
        ResponseError.fromError(error).send(response);
    }
}

const getAllBooksByAuthor = async (request,response)=>{
    try{
        const books = await service.getAllBooksByAuthor(request.params.authorId);
        ResponseMessage.fromData(books).send(request,response);
    }catch(error){
        ResponseError.fromError(error).send(response);
    }
}

module.exports={
    getAllBooks,getBookByIsbn,addBook,
    getReviews,addReview,updateReview,
    getSingleReview,updateSingleReview,deleteSingleReview,
    getAllBooksByAuthor
}