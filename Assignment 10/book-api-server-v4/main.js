const {createApp} = require('./src/app');

const start=async()=>{

    const app=await createApp(__dirname );
    const port=5000;
    const server=app.listen(port,_=>{ 
        console.log(`server started on : http://localhost:${port}`);
    });

    server.on('error',error=>console.error('error:',error.message));

}
start();

//http://localhost:5000/api/books/
//http://localhost:5000/api/authors/
//http://localhost:5000/api/user/
