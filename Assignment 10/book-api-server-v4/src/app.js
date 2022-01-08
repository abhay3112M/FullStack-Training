const express= require('express');
const path=require('path');
const db=require('./data/setup'); //must setup data before setting routes.
const getBookRouter=require('./routers/books-router');
const getAuthorRouter=require('./routers/author-router');
const getUserRouter=require('./routers/user-router');


var configureMiddlewares=async(app,baseDir)=>{
    app.use(express.static(path.join(baseDir, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended:true}));
};


var configureRoutes=async(app)=>{
    console.log("reached here app.js");
    app.use('/api/books', getBookRouter());
    app.use('/api/authors', getAuthorRouter());
    app.use('/api/user',getUserRouter());
};


const createApp=async(baseDir)=>{

    await db.setup();
    console.log('connected to database server...');
    
    const app = express();

    await configureMiddlewares(app,baseDir);

    await configureRoutes(app);

    return app
}


module.exports = {createApp}