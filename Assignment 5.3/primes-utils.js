
const isPrimeSync=(number)=>{
    if(number<2)
        return false;
    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;

    return true;
}


/*
const findPrimes=(min,max,cb)=>{
    let result=[];

    setTimeout(()=>{
        for(let i=min;i<max;i++){
            if(isPrimeSync(i))
                result.push(i);
        }
    
        cb(result);
    },500);
    
}
2 3000
localmin = 2
localmax = 1002

localmin = 1002
localmax = 2002;

localmin = 2002;
localmax = 3000;

localmin = 3000
*/


//----------------------------------------------------------------
const findPrimes=(min,max,cb)=>{
    setInterval(()=>{
        if(max<=1000){
            let result=[];
            for(let i=min;i<max;i++){
                if(isPrimeSync(i))
                    result.push(i);
            }
            cb(result);
        }
        else{
            let result=[];
            localmin = min;
            localmax = max;
            while(localmin<max){
                if(min+1000<max)
                    localmax = min+1000;
                else
                    localmax = max;
                //localmax = min(max,min+1000);
                setInterval(()=>{
                    for(let i=localmin;i<localmax;i++)
                        if(isPrimeSync(i))
                            result.push(i);
                },100);
                localmin = localmax;
            }
            cb(result);
        }
    },10);
    
}

//----------------------------------------------------------------







module.exports={
    isPrimeSync,
    findPrimes
}