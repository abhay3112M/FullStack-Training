const express= require('express');
const {addBook,getAllBooks,getBookByIsbn} =require('../controllers/books-controller');
const {requestHandler} =require('../utils/http');
const service=require('../services/books-service');
const { authorize, authorizeFor } = require('../services/user-service');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(requestHandler(service.getAllBooks))
        .post(authorize, requestHandler(service.addBook));
    
    router
        .route("/:isbn")
        .get(requestHandler(service.getBookByIsbn))
        .put(authorize, requestHandler(service.updateBookByIsbn))
        .delete(authorize, requestHandler(service.deleteBookByIsbn)); 
        
        
    return router;

};

