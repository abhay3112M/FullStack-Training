const express= require('express');
const {requestHandler} = require('../utils/http');
const service = require('../services/author-service');

const {authorize, authorizeFor}=require('../services/user-service');


module.exports=()=>{

    const router=express.Router();

    router
        .route("/")
        .get(requestHandler(service.getAllAuthors))
        .post(authorize,requestHandler(service.addAuthor));

    
    router
        .route("/:id")
        .get(requestHandler(service.getAuthorById))
        .put(authorize, requestHandler(service.updateAuthor))
        .delete(authorize, requestHandler(service.deleteAuthor));
        
    router
        .get("/:id/books", requestHandler(service.getBooksByAuthor))

    return router;

};

