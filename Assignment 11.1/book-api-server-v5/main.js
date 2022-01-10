const {createApp} = require('./src/app');
const {getEnv}=require('./src/utils/env');

const start=async()=>{

    const app=await createApp(__dirname );
    const port=getEnv("PORT",80);
    const server=app.listen(port,_=>{ 
        console.log(`server started on : http://localhost:${port}`);
    });

    server.on('error',error=>console.error('error:',error.message));

}

console.log('environment',process.env.NODE_ENV);
start();

//http://localhost:5000/api/books/
//http://localhost:5000/api/authors/
//http://localhost:5000/api/user/
