

const Printfun =()=>{
  return "Hello";
}
const PrintfunPromise =()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("World!");
    }, 2000);
  })
}

const functionCall = async function(){
  let val1 = Printfun();
  console.log(val1);
  let val2 = await PrintfunPromise();
  console.log(val2);
}

functionCall();



/*

const printPromise = async function(str){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(str==="")
        return reject(new Error("Empty string passed"));

      console.log(resolve("World!"));
      await(2000);
      
    }, 2000);
  })
}


const functionCall = async function(){
  let val2 = printPromise("Hello by simple function call");
  console.log(val2);
}

functionCall();
*/