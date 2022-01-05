const {isPrimeSync}=require( '../lib/primes');
const Assert = require('assert');

/*
test('should return true for isPrime(3)', ()=>{
    const result=isPrimeSync(3);
    console.log('result',result);
});
*/
describe("is Prime true tests",()=>{

    test('should return true for isPrime(13)',()=>{
        expect(isPrimeSync(13)).toBe(true);
    });

    test('should return true for isPrime(2)',()=>{
        expect(isPrimeSync(2)).toBe(true);
    });
});

describe("is Prime false tests",()=>{

    test('should return false for isPrime(20)',()=>{
        const result = isPrimeSync(20);
        Assert.deepEqual(result, false);
    });

    test('should return false for isPrime(0)',()=>{
        expect(isPrimeSync(0)).toBe(false);
    })

    test('should return true for isPrime(-5)',()=>{
        expect(isPrimeSync(-5)).toBe(false);
    })
});