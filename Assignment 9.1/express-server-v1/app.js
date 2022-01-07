const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();

const port = 4000;
var localBookarr ;
const server = app.listen(port,_=>{
    //console.log(`server started :http://localhost:${port}`);

    //reading the file async way
    async function readfiles(){
        try{
            const data = await fs.readFile('books5.json');
            localBookarr = JSON.parse(data);
        }
        catch(error){
            console.error(`Got an error trying to read the file: ${error.message}`);
        }
    }
    readfiles();

    app.get('/api/books',(request,response)=>{
        //response.send('getting a list of books');
        response.send(localBookarr);
    });

    app.post('/api/books',(request,response)=>{
        response.send('adding a new book on server');
    });

    app.get('/api/books/:isbn',(request,response)=>{
        const isbn = request.params.isbn;
        var book=undefined;
        for(var x of localBookarr){
            if(x.isbn==isbn){
                book=x;
                break;
            }
        }
        if(book)
            response.send(book);
        else
            response.status(404).send({message: 'Book not found',isbn});
    });
    
});

server.on('error',error => console.error('error:',error.message));