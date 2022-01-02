var countP=0;
var PrintMsg = setInterval(function(){
    console.log("HelloJS")
    countP++;
    if(countP==10)
        clearInterval(PrintMsg)
},2000)


const msgPrint = setInterval(() => {
    console.log("Hello JS");
}, 2000);
setTimeout(() => {
    clearInterval(msgPrint);
}, 20000);
