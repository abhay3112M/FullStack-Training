const express= require('express');
const {addBook,getAllBooks,getBookByIsbn,getReviews,addReview,updateReview,getSingleReview,updateSingleReview,deleteSingleReview} =require('../controllers/books-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        //.put()
        //.delete()
        ;
    
    router
        .route("/:isbn/reviews")
        .get(getReviews)
        .post(addReview)
        .put(updateReview);

    router
        .route("/:isbn/reviews/:num")
        .get(getSingleReview)
        .put(updateSingleReview)
        .delete(deleteSingleReview);


    return router;

};

