var search = function(list, match,index){
    var result=[];
    if(match(list[index]))
        result.push(value);
    return result;
}



const  array = [2,3,9,11,8,15,4,17 ]; 

const primes =  search(array,isPrime,);
console.log(primes) ; // [2,3,11,17]
const alt = search(array,i=>(i%2==0))
console.log(alt) ; // [2,9,8,4] 


function isPrime(number){ 
    if(number<2) 
        return false; 
    for( let i=2;i<number;i++) 
        if(number%i==0)
            return false;
    return true; 
} 